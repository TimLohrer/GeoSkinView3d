import type { RemoteImage, TextureSource } from "skinview-utils";

export interface GeoModel {
    model: any;
    animation: any;
    config: object;
    texture: RemoteImage | TextureSource
}