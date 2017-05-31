import { CSharpNamespace } from './Models';
export declare class NamespaceParser {
    private scopeHelper;
    private regexHelper;
    private usingsParser;
    private classParser;
    private enumParser;
    constructor();
    parseNamespaces(content: string): CSharpNamespace[];
}