export interface MessageDialogData {
    title?: string;
    message: string;
    type: MessageType;
}

export enum MessageType {
    error,
    warning,
    information,
}
