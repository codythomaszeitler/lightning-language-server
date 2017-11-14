import { extname, join } from 'path';
import { TextDocument, Files } from 'vscode-languageserver';

const LWC_STANDARD: string = 'lwc-standard.json';

export function getExtension(textDocument: TextDocument): string {
    const filePath = Files.uriToFilePath(textDocument.uri);
    return filePath ? extname(filePath) : '';
}

export function isTemplate(document: TextDocument): boolean {
    return document.languageId === 'html';
}

export function isJavascript(document: TextDocument): boolean {
    return document.languageId === 'javascript';
}

export function getResourcePath(resourceName: string){
    return join(__dirname, resourceName);
}

export function getlwcStandardResourcePath(){
    return join(__dirname, LWC_STANDARD);
}