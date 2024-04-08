import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Input } from "..";
import { setDefaultModel } from "../../redux/slices/stateSlice";
import { setShowDialog } from "../../redux/slices/uiStateSlice";
import { postToIde } from "../../util/ide";

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  align-items: center;
`;

function XtApiKeyDialog() {
  const navigate = useNavigate();
  const [apiKey, setApiKey] = React.useState("");
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h3>请输入您的小铁ApiKey</h3>
      <p>
        小铁智能问答系统ApiKey可通过登录官方网站获取。如果您没有小铁智能问答系统的账号,请先前往网站进行注册。
      </p>

      <Input
        type="text"
        placeholder="请输入您的ApiKey"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <GridDiv>
        <Button
          onClick={() => {
            dispatch(setShowDialog(false));
            // navigate("/models");
          }}
        >
          取消
        </Button>
        <Button
          disabled={!apiKey}
          onClick={() => {
            postToIde("config/addXtGptApiKey", apiKey);
            dispatch(setShowDialog(false));
            dispatch(setDefaultModel("xiaotie-chat"));
          }}
        >
          确定
        </Button>
      </GridDiv>
    </div>
  );
}

export default XtApiKeyDialog;
