//declared all the properties required for the sequence

export interface Sequence {
  
    loop: boolean,
    isPaused: boolean,
    isActive: boolean,
    isStopping: boolean,
    opacity: number,
    length: string,
    position: string,
    currentCueName: string,
    identifier: string,
    mutexGroupId: number
} 