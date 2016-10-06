const fs = require('@node/fs-plus');
const path = require("@node/path");

export class FileData {
    name: string;
    fullPath: string;
    isDirectory: boolean;
    fileList: Array<FileData>;
    dirList: Array<FileData>;

    public static create(file: string, directory: string): FileData {
        let result: FileData;

        result = new FileData();

        result.name = file;
        result.fullPath = path.join(directory, file);
        result.isDirectory = fs.statSync(result.fullPath).isDirectory();
        result.fileList = [];
        result.dirList = [];

        return result;
    }

    public readFiles():void {
        let that = this;
        if (!that.isDirectory) {
            return;
        }

        fs.readdir(that.fullPath, function (err: any, files: any) {
            if (err) {
                throw err;
            }

            files.forEach((file:string)=> {
                let fileData : FileData = FileData.create(file, that.fullPath);

                if(fileData.isDirectory) {
                    that.dirList.push(fileData);
                    fileData.readFiles();
                }else {
                    that.fileList.push(fileData);
                }
            });
        });
    }
}
