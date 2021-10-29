

export default interface TargetObject<T extends EventTarget> extends Event{
    target:T
    currentTarget:T
}