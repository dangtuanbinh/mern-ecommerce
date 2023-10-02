import "./styles.scss";

import { useSelector } from "react-redux";
import {
  modalData,
  modalSize,
  modalStatus,
  modalTemplate,
} from "../../store/selector/RootSelector";
import icClose from "../../assets/icons/icClose.svg";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/components/customModal/modalSlice";
import { Modal } from "antd";

const classNamePrefix = "custom-modal";

function CustomModal() {
  const dispatch = useDispatch<any>();

  const isOpen = useSelector(modalStatus);
  const template = useSelector(modalTemplate);
  const data = useSelector(modalData);
  const size = useSelector(modalSize);

  const renderSize = (modalSize: string) => {
    switch (modalSize) {
      case "event":
        return 1084;
      case "large":
        return 713;
      case "normal":
        return 460;
      default:
        return 550;
    }
  };

  const generateContent = (template: string) => {
    switch (template) {
     
      default:
        return;
    }
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      title=""
      open={isOpen}
      closable={false}
      onCancel={handleClose}
      wrapClassName="wrapper"
      style={{ width: renderSize(size) }}
      width={renderSize(size)}
      footer={null}
      centered={true}
      zIndex={2000}
      className={classNamePrefix}
      closeIcon={<img src={icClose} width={24} height={24} alt="" />}
    >
      {/* {generateContent(template)} */}
    </Modal>
  );
}

export default CustomModal;
