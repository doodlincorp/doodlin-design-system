import React from "react";
import Text from "../component/Text";
import StoriesIcon from "../component/Icon";
import "../reset.scss";

import "../index.scss";

export default {
  title: "Introduction/Styleguide",
  component: Text,
};

export const Color = () => {
  const Palette = ({ name, color }: any) => (
    <div
      style={{
        display: "inline-block",
        width: 150,
        height: 190,
        marginTop: 8,
        marginRight: 10,
        textAlign: "center",
        borderRadius: 4,
        backgroundColor: "#fff",
        border: "1px solid #ced4da",
        overflow: "hidden",
        fontSize: 12,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 130,
          backgroundColor: color,
          marginBottom: 6,
        }}
      />

      <Text>
        <span style={{ fontWeight: 500 }}>{name}</span>
      </Text>
      <Text>
        <span style={{ fontWeight: 300 }}>{color}</span>
      </Text>
    </div>
  );
  return (
    <div style={{ padding: 20 }}>
      <Text>Yellow</Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name="Yellow_0" color="#fff9db" />
        <Palette name="Yellow_1" color="#fff3bf" />
        <Palette name="Yellow_2" color="#ffec99" />
        <Palette name="Yellow_3" color="#ffe066" />
        <Palette name="Yellow_4" color="#ffd43b" />
        <Palette name="Yellow_5" color="#fcc419" />
        <Palette name="Yellow_6" color="#fab005" />
        <Palette name="Yellow_7" color="#f59f00" />
        <Palette name="Yellow_8" color="#f08c00" />
        <Palette name="Yellow_9" color="#e67700" />
      </div>

      <Text>Warm Gray</Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name="Gray_0" color="#f8f8f8" />
        <Palette name="Gray_1" color="#f1f1f1" />
        <Palette name="Gray_2" color="#e9e9e9" />
        <Palette name="Gray_3" color="#e0e0e0" />
        <Palette name="Gray_4" color="#d0d0d0" />
        <Palette name="Gray_5" color="#b0b0b0" />
        <Palette name="Gray_6" color="#8b8b8b" />
        <Palette name="Gray_7" color="#555555" />
        <Palette name="Gray_8" color="#333333" />
        <Palette name="Gray_9" color="#111111" />
      </div>
    </div>
  );
};

export const Icon = () => (
  <div style={{ padding: 20 }}>
    <div
      className="icon-table"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
      }}
    >
      <StoriesIcon.AddColumn></StoriesIcon.AddColumn>
      <StoriesIcon.Align></StoriesIcon.Align>
      <StoriesIcon.ApplicantList></StoriesIcon.ApplicantList>
      <StoriesIcon.Archive></StoriesIcon.Archive>
      <StoriesIcon.Arrow></StoriesIcon.Arrow>
      <StoriesIcon.Calendar></StoriesIcon.Calendar>
      <StoriesIcon.Camera></StoriesIcon.Camera>
      <StoriesIcon.Check></StoriesIcon.Check>
      <StoriesIcon.Chevron></StoriesIcon.Chevron>
      <StoriesIcon.CircleCheck></StoriesIcon.CircleCheck>
      <StoriesIcon.Clip></StoriesIcon.Clip>
      <StoriesIcon.Clock></StoriesIcon.Clock>
      <StoriesIcon.Clock variant="solid"></StoriesIcon.Clock>
      <StoriesIcon.Close></StoriesIcon.Close>
      <StoriesIcon.Copy></StoriesIcon.Copy>
      <StoriesIcon.DefaultImage></StoriesIcon.DefaultImage>
      <StoriesIcon.DepartmentManage></StoriesIcon.DepartmentManage>
      <StoriesIcon.Doc></StoriesIcon.Doc>
      <StoriesIcon.DocAlt></StoriesIcon.DocAlt>
      <StoriesIcon.Download></StoriesIcon.Download>
      <StoriesIcon.Edit></StoriesIcon.Edit>
      <StoriesIcon.Ellipsis vertical></StoriesIcon.Ellipsis>
      <StoriesIcon.Email></StoriesIcon.Email>
      <StoriesIcon.Excel></StoriesIcon.Excel>
      <StoriesIcon.Filter></StoriesIcon.Filter>
      <StoriesIcon.Tag></StoriesIcon.Tag>
      <StoriesIcon.Tag variant="ghost"></StoriesIcon.Tag>
      <StoriesIcon.Folder></StoriesIcon.Folder>
      <StoriesIcon.FolderDownload></StoriesIcon.FolderDownload>
      <StoriesIcon.Memo></StoriesIcon.Memo>
      <StoriesIcon.Memo variant="quick"></StoriesIcon.Memo>
      <StoriesIcon.Garbage></StoriesIcon.Garbage>
      <StoriesIcon.IDType></StoriesIcon.IDType>
      <StoriesIcon.InfoMark></StoriesIcon.InfoMark>
      <StoriesIcon.MapPin></StoriesIcon.MapPin>
      <StoriesIcon.ModalClose></StoriesIcon.ModalClose>
      <StoriesIcon.OpeningList></StoriesIcon.OpeningList>
      <StoriesIcon.Pen></StoriesIcon.Pen>
      <StoriesIcon.Phone></StoriesIcon.Phone>
      <StoriesIcon.Plus></StoriesIcon.Plus>
      <StoriesIcon.Link></StoriesIcon.Link>
      <StoriesIcon.LinkExternal></StoriesIcon.LinkExternal>
    </div>
  </div>
);

export const Spacing = () => <div>【ツ】</div>;
