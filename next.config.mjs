/** @type {import('next').NextConfig} */
import path from "path"
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname), 'styles'],
        sourceMap: false,
    },
    productionBrowserSourceMaps: false,
    // Enables the styled-components SWC transform
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "i.ibb.co",
                port: "",
                pathname: "/**/*"
            }
        ]
    }
};

export default nextConfig;
