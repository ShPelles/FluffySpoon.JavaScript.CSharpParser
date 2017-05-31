import { CSharpFile } from './Models';
export declare class FileParser {
    private contents;
    private namespaceParser;
    private usingsParser;
    private classParser;
    private enumParser;
    constructor(contents: string);
    parseFile(): CSharpFile;
}