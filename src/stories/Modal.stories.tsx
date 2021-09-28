import React, { useState } from "react";
import Button from "../component/Button";
import Text from "../component/Text";
import Modal from "../component/Modal";
import "../reset.scss";

export default {
  title: "Component/Modal",
  component: Modal,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      {open && (
        <Modal
          variant="default"
          header={{ Text: "기본 모달" }}
          width={400}
          closeBtn={() => setOpen(false)}
          footer={{
            cancelBtn: (
              <Button
                buttonColor="gray"
                onClick={() => setOpen(false)}
                variant="ghost"
              >
                취소
              </Button>
            ),
            submitBtn: <Button buttonColor="blue">확인</Button>,
            BtnAlign: "end",
          }}
        >
          <Text lineHeight="narrow">가장 기본이 되는 모달입니다.</Text>
        </Modal>
      )}
    </div>
  );
};

export const Alt = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      {open && (
        <Modal width={400} variant="alt" closeBtn={() => setOpen(false)}>
          <Text lineHeight="narrow">
            그리팅이 유저에게 회사 차원에서 공지할 때 쓰이는 모달입니다.
          </Text>
        </Modal>
      )}
    </div>
  );
};

export const AlertConfirm = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      {open && (
        <Modal
          width={400}
          closeBtn={() => setOpen(false)}
          footer={{
            cancelBtn: (
              <Button
                buttonColor="gray"
                onClick={() => setOpen(false)}
                variant="ghost"
              >
                취소
              </Button>
            ),
            submitBtn: <Button buttonColor="blue">확인</Button>,
            BtnAlign: "end",
          }}
        >
          <Text lineHeight="narrow">
            기본 모달에서 header 속성만 지우면
            <br />
            얼럿, 컨펌 모달이 됩니다.
          </Text>
        </Modal>
      )}
    </div>
  );
};
