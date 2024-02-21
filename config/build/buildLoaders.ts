import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import  webpack from 'webpack';
import { BuildOptions } from './types/config';


export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[]  {

    const cssLoaders = {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              {
                loader: 'css-loader',
                options: {
                    modules:{
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev 
                        ? '[path][name]__[local]' 
                        : '[hash:base64:8]'
                    },
                }
              },
              // Compiles Sass to CSS
              "sass-loader",
            ],
          }
    
    // без Js нужен babel
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    return [
        typescriptLoader,
        cssLoaders
    ]
}