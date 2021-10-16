export default function syncDirectory(srcDir: string, targetDir: string, options?: {
    type?: string;
    forceSync?(filePath?: string): boolean;
    exclude?: string | RegExp | Array<string | RegExp | Function>;
    watch?: boolean;
    deleteOrphaned?: boolean;
    supportSymlink?: boolean;
    afterEachSync?(params?: { type: string; relativePath: string, absolutePath: string }): any;
    filter?(filePath?: string): boolean;
    onError?(err?: object): any;
    chokidarWatchOptions?: Object;
}): object | void