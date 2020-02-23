/** Data to pass to Dialog */
export interface MessageDialogData {
    /** title for dialog modal */
    title?: string;
    /** Message to display */
    message: string;
    /** Message Type */
    type: MessageType;
}

/** Types of possible messages */
export enum MessageType {
    error,
    warning,
    information,
}
