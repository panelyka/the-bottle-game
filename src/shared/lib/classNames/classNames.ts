type Mods = Record<string, boolean | string>

const obj: Mods = {
    hover: true,

}



export function ClassNames(cls: string, mods?: Mods, additional?: string[]): string {

    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([cls,_]) => cls),
        ...additional.filter(Boolean)
    ].join(' ')

}

export default ClassNames