export interface DialogData {
    title: string;
    message: string;

}

export interface ConfirmDialogData extends DialogData {
    type: 'success' | 'error';
}


// export interface DialogConfig {
//     width?: string;
//     data: DialogData;
// }