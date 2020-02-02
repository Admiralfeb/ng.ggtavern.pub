/**
 * Data to pass to MessageDialog Component
 */
export interface MessageDialogData {
    title?: string;
    message: string;
    type: MessageType;
}

/**
 * Types of possible messages.
 */
export enum MessageType {
    error,
    warning,
    information,
}
