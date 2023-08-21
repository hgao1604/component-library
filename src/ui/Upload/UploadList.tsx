import Icon from "../Icon/Icon";
import { UploadFile } from "./Upload";
import Progress from "./Progress";

export interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: React.FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;

  return (
    <ul className="flex flex-col gap-2 rounded-lg hover:bg-slate-100">
      {fileList.map((item) => {
        return (
          <>
            <li
              className="flex items-center justify-between  gap-2 rounded-lg px-2"
              key={item.uid}
            >
              <span className="flex items-center space-x-2">
                <Icon icon="file-alt" theme="secondary" />
                <span className="truncate">{item.name}</span>
              </span>
              <span className="mr-auto">
                {item.status === "uploading" && (
                  <Icon icon="spinner" spin className="text-primary" />
                )}
                {item.status === "success" && (
                  <Icon icon="check-circle" className="text-success" />
                )}
                {item.status === "error" && (
                  <Icon icon="times-circle" className="text-danger" />
                )}
              </span>
              <span>
                <Icon icon="times" onClick={() => onRemove(item)} />
              </span>
            </li>
            {item.status === "uploading" && (
              <Progress percent={item.percent || 0} />
            )}
          </>
        );
      })}
    </ul>
  );
};

export default UploadList;
