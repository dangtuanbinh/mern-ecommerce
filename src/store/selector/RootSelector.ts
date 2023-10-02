export const getUserLogin = (state: any) => state.auth.isUserLogin;

// Modal
export const modalStatus = (state: any) => state.modal.isOpen;
export const modalTemplate = (state: any) => state.modal.template;
export const modalData = (state: any) => state.modal.data;
export const modalSize = (state: any) => state.modal.size;

// custom dialog for confirm
export const getDialogContent = (state: any) => state.dialog.content;
export const getDialogTitle = (state: any) => state.dialog.title;
export const getDialogStatus = (state: any) => state.dialog.isOpen;
export const getDialogMaskClosable = (state: any) => state.dialog.maskClosable;
export const getDialogConfirmText = (state: any) => state.dialog.confirmText;
export const getDialogCloseText = (state: any) => state.dialog.closeText;
export const getActionConfirm = (state: any) => state.dialog.actionConfirm;
export const getActionCancel = (state: any) => state.dialog.actionCancel;
export const getActionAfterClose = (state: any) =>
  state.dialog.actionAfterClose;
export const getDialogType = (state: any) => state.dialog.type;

// Get user role
export const getUserRole = (state: any) => state.user.role

// Get post view
export const getPostView = (state: any) => state.postViewChange.view;
export const getPostId = (state: any) => state.postViewChange.postId;

//File upload
export const getFileUploadList = (state:any) => state.fileUpload.fileList;
