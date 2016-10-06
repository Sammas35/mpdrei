// const fs = require('node_modules/fs-plus/lib/fs-plus.js')
// const fs = require('fs-plus')

import any = jasmine.any;
const fs = require('@node/fs-plus');
const path = require("@node/path");

import {Injectable} from '@angular/core';
import {FileData} from './FileData';

@Injectable()
export class UserdataService {

    getDirectories(): Array<FileData> {
        let directory = 'd:\\sam\\Mucke';


        collectFiles('.', directory)
            .forEach((fileData: FileData)=> {
                console.log(fileData);
            });


        return null;

        function collectFiles(file: string, directory: string): Array<FileData> {
            let fileData: FileData = FileData.create(file, directory);

            fileData.readFiles();

            return [fileData];
        }
    }
}