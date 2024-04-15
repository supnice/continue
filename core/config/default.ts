import { SerializedContinueConfig } from "..";

export const defaultConfig: SerializedContinueConfig = {
  models: [
    {
      title: "xiaotie-chat",
      provider: "openai",
      model: "xiaotie-chat",
      apiBase: "http://198.218.33.133:8001/v1",
    },
    {
      title: "xiaotie-code",
      provider: "openai",
      model: "xiaotie-code",
      apiBase: "http://198.218.33.133:8002/v1",
    },
  ],
  slashCommands: [
    {
      name: "edit",
      description: "Edit selected code",
    },
    {
      name: "comment",
      description: "Write comments for the selected code",
    },
    {
      name: "share",
      description: "Export this session as markdown",
    },
    {
      name: "cmd",
      description: "Generate a shell command",
    },
  ],
  customCommands: [
    {
      name: "test",
      prompt:
        "Write a comprehensive set of unit tests for the selected code. It should setup, run tests that check for correctness including important edge cases, and teardown. Ensure that the tests are complete and sophisticated. Give the tests just as chat output, don't edit any file.",
      description: "Write unit tests for highlighted code",
    },
  ],
  contextProviders: [
    { name: "diff", params: {} },
    {
      name: "open",
      params: {},
    },
    { name: "terminal", params: {} },
    { name: "problems", params: {} },
    { name: "codebase", params: {} },
  ],
  tabAutocompleteModel: {
    title: "Starcoder2 3b",
    provider: "ollama",
    model: "starcoder2:3b",
  },
};

export const defaultConfigJetBrains: SerializedContinueConfig = {
  models: [
    {
      title: "xiaotie-chat",
      provider: "openai",
      model: "xiaotie-chat",
      apiBase: "http://198.218.33.133:8001/v1",
    },
    {
      title: "xiaotie-code",
      provider: "openai",
      model: "xiaotie-code",
      apiBase: "http://198.218.33.133:8002/v1",
    },
  ],
  slashCommands: [
    {
      name: "edit",
      description: "Edit selected code",
    },
    {
      name: "comment",
      description: "Write comments for the selected code",
    },
    {
      name: "share",
      description: "Export this session as markdown",
    },
  ],
  customCommands: [
    {
      name: "test",
      prompt:
        "Write a comprehensive set of unit tests for the selected code. It should setup, run tests that check for correctness including important edge cases, and teardown. Ensure that the tests are complete and sophisticated. Give the tests just as chat output, don't edit any file.",
      description: "Write unit tests for highlighted code",
    },
  ],
  contextProviders: [
    {
      name: "open",
      params: {},
    },
  ],
  tabAutocompleteModel: {
    title: "Starcoder2 3b",
    provider: "ollama",
    model: "starcoder2:3b",
  },
};
