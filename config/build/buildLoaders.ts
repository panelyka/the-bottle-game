import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";


export default function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {

    const fileLoaders = {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        },

    };


    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader ,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    }

                }
            },
            'sass-loader'
        ],

    }
    const svgLoaders = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    const typescriptLoaders =
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }
    ;
    return [
        typescriptLoaders, cssLoaders, svgLoaders, fileLoaders
    ]
}