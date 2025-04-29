/**
 * Three.js 类型声明文件
 * 解决Three.js扩展模块导入问题
 */

declare module "three/examples/jsm/controls/OrbitControls" {
  import { Camera, MOUSE, TOUCH, Vector3 } from "three"

  export class OrbitControls {
    constructor(object: Camera, domElement?: HTMLElement)

    object: Camera
    domElement: HTMLElement | HTMLDocument

    // API
    enabled: boolean
    target: Vector3

    // 限制
    minDistance: number
    maxDistance: number
    minZoom: number
    maxZoom: number
    minPolarAngle: number
    maxPolarAngle: number
    minAzimuthAngle: number
    maxAzimuthAngle: number
    enableDamping: boolean
    dampingFactor: number
    enableZoom: boolean
    zoomSpeed: number
    enableRotate: boolean
    rotateSpeed: number
    enablePan: boolean
    panSpeed: number
    screenSpacePanning: boolean
    keyPanSpeed: number
    autoRotate: boolean
    autoRotateSpeed: number
    enableKeys: boolean
    keys: { LEFT: string; UP: string; RIGHT: string; BOTTOM: string }
    mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE }
    touches: { ONE: TOUCH; TWO: TOUCH }

    update(): boolean
    dispose(): void
    getPolarAngle(): number
    getAzimuthalAngle(): number
    getDistance(): number
    saveState(): void
    reset(): void
  }
}

declare module "three/examples/jsm/loaders/FontLoader" {
  import { LoadingManager } from "three"

  export class FontLoader {
    constructor(manager?: LoadingManager)
    manager: LoadingManager
    path: string

    load(
      url: string,
      onLoad?: (responseFont: Font) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void
    parse(json: any): Font
    setPath(path: string): FontLoader
  }

  export class Font {
    constructor(jsondata: any)
    data: string

    generateShapes(text: string, size: number): any[]
  }
}

declare module "three/examples/jsm/geometries/TextGeometry" {
  import { BufferGeometry } from "three"
  import { Font } from "three/examples/jsm/loaders/FontLoader"

  export interface TextGeometryParameters {
    font: Font
    size?: number
    height?: number
    curveSegments?: number
    bevelEnabled?: boolean
    bevelThickness?: number
    bevelSize?: number
    bevelOffset?: number
    bevelSegments?: number
  }

  export class TextGeometry extends BufferGeometry {
    constructor(text: string, parameters: TextGeometryParameters)
    parameters: {
      font: Font
      size: number
      height: number
      curveSegments: number
      bevelEnabled: boolean
      bevelThickness: number
      bevelSize: number
      bevelOffset: number
      bevelSegments: number
    }
  }
}
