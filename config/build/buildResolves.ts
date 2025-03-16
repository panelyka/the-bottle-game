import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export default function buildResolves(options: BuildOptions) : ResolveOptions {
    return {
        extensions: ['.ts', '.js', '.tsx'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}