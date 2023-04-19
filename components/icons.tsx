import React from "react";
import Image from 'next/image'

export function IconBottle({className}:any) {
    return (
        <Image className={className} src="/1.svg" alt="bottleSVG" width={100} height={100} />
    )
}

export function FlowerOverlay({className}:any) {
    return (
        <img className={className} src="/3.png" alt="flowers" />
    )
}

export function Wave({className}:any) {
    return (
        <img className={className} src="/wavy.svg" alt="wave" />
    )
}

export function Shoes({className}:any) {
    return (
        <img className={className} src="/shoes.png" alt="shoes with pink feathers" />
    )
}