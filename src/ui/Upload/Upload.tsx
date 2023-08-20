import axios from "axios";
import { useRef, useState } from "react";
import { UploadList } from "./UploadList";
import { Dragger } from "./Dragger";

export interface UploadProps {
  action: string;
  /** Progress callback */
  onProgress?: (percentage: number, file: File) => void;
  /** Success callback */
  onSuccess?: (data: any, file: File) => void;
  /** Error callback */
  onError?: (err: any, file: File) => void;
  /** Before upload callback */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /** Callback after upload */
  afterUpload?: (file: File) => void;

  onChange?: (file: File) => void;
  /** Default file list */
  defaultFileList?: UploadFile[];
  /** Callback when file is removed */
  onRemove?: (file: UploadFile) => void;
  header?: { [key: string]: any };
  name?: string;
  data?: { [key: string]: any };
  withCredentials?: boolean;
  accept?: string;
  multiple?: boolean;
  drag?: boolean;
  children?: React.ReactNode;
}

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: "ready" | "uploading" | "success" | "error";
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export const Upload: React.FC<UploadProps> = (props) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const {
    action,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
    onRemove,
    defaultFileList,
    header,
    name,
    data,
    withCredentials,
    accept,
    multiple,
    drag,
    children,
  } = props;
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };

  function updateFileList(
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        }

        return file;
      });
    });
  }

  function post(file: File) {
    const _file: UploadFile = {
      uid: Date.now() + "upload-file",
      status: "ready",
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList((prevList) => {
      return [_file, ...prevList];
    });
    const formData = new FormData();
    formData.append(name || "file", file);
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
    }
    axios
      .post(action, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...header,
        },
        withCredentials,
        onUploadProgress: (e) => {
          if (e.total === undefined) {
            return;
          }
          const percentage = Math.round((e.loaded * 100) / e.total) || 0;
          if (percentage < 100) {
            updateFileList(_file, { percent: percentage, status: "uploading" });
            if (onProgress) {
              onProgress(percentage, file);
            }
          }
        },
      })
      .then((res) => {
        updateFileList(_file, { status: "success", response: res.data });
        if (onSuccess) {
          onSuccess(res.data, file);
        }
        if (onChange) {
          onChange(file);
        }
      })
      .catch((err) => {
        updateFileList(_file, { status: "error", error: err });
        if (onError) {
          onError(err, file);
          console.log(err);
        }
        if (onChange) {
          onChange(file);
        }
      });
  }

  function uploadFiles(files: FileList) {
    const postFiles = Array.from(files);
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            post(processedFile);
          });
        } else if (result) {
          post(file);
        }
      }
    });
  }

  function handleRemove(file: UploadFile) {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid);
    });
    if (onRemove) {
      onRemove(file);
    }
  }

  return (
    <div>
      <div onClick={handleClick} className="inline-block">
        {drag ? (
          <Dragger
            onFile={(fileList) => {
              uploadFiles(fileList);
            }}
          >
            {children}
          </Dragger>
        ) : (
          children
        )}
      </div>
      <input
        type="file"
        ref={fileInput}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept={accept}
        multiple={multiple}
      />
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

Upload.defaultProps = {
  name: "file",
};

export default Upload;
