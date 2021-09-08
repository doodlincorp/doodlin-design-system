import React, { useState } from "react";
import Button from "../component/Button";
import { SearchIcon } from "../component/Icon/SearchIcon";
import Input from "../component/Input";
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
          width={400}
          closeBtn={() => setOpen(false)}
          header={{ Text: "기본 모달" }}
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
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
        </Modal>
      )}
    </div>
  );
};

export const Variant = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      {open && (
        <Modal width={400} variant="alt" closeBtn={() => setOpen(false)}>
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
          <Input
            icon={{ tailing: <SearchIcon /> }}
            placeholder="다양한 키워드로 검색해 보세요"
          />
        </Modal>
      )}
    </div>
  );
};
