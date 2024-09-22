export const textTrimmer = (str, length = 100) => {
  if (typeof str !== "string") {
    return "";
  }
  return str.length > length ? `${str.substring(0, length)}...` : str;
};

export const removeGitPlus = (str) => {
  if (typeof str !== "string") {
    return "";
  }
  return str.replace("git+", "").replace(".git", "");
};

export const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};

export const packageDetailTitles = [
  {
    title: "ReadMe",
    darkColor: "#fecd3b",
    lightColor: "#fef4d8",
    textColor: "#896700",
    icon: "readme",
  },
  {
    title: "Code",
    darkColor: "#bc3433",
    lightColor: "#f6e1e0",
    textColor: "#bc3433",
    icon: "code",
  },
  {
    title: "Dependencies",
    darkColor: "#c937c3",
    lightColor: "#f5d7f2",
    textColor: "#782174",
    icon: "dependencies",
  },
  {
    title: "Dependents",
    darkColor: "#8956ff",
    lightColor: "#efdcfe",
    textColor: "#280099",
    icon: "dependents",
  },
  {
    title: "Versions",
    darkColor: "#29aae3",
    lightColor: "#d4eef9",
    textColor: "#156d91",
    icon: "versions",
  },
]