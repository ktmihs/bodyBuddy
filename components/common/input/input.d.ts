interface CheckIsValid {
  nickname: string;
  onSetNickname: Dispatch<SetStateAction<string>>;
  isCheckNickname: Dispatch<SetStateAction<boolean>>;
}
