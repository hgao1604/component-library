import { FC } from "react";

import Upload, { UploadProps } from "./Upload";
import Dragger, { DraggerProps } from "./Dragger";
import UploadList, { UploadListProps } from "./UploadList";
import Progress, { ProgressProps } from "./Progress";

export type IUploadComponent = FC<UploadProps> & {
  Dragger: FC<DraggerProps>;
  UploadList: FC<UploadListProps>;
  Progress: FC<ProgressProps>;
};

const TransUpload = Upload as IUploadComponent;

TransUpload.Dragger = Dragger;
TransUpload.UploadList = UploadList;
TransUpload.Progress = Progress;

export default TransUpload;
