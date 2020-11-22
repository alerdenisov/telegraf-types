import { InputFile, Typegram } from "./index";

export type Integer = number;
export type Float = number;
export type String = string;
export type Boolean = boolean;
export type True = true;

/** Utility type providing a promisified version of Telegram */
export type Telegram = Typegram["Telegram"];
/** Utility type providing the argument type for the given method name or `{}` if the method does not take any parameters */
export type Opts<
  M extends keyof Typegram<F>["Telegram"],
  F = InputFile
> = Typegram<F>["Opts"][M];
/** Wrapper type to bundle all methods of the Telegram API */
export type TelegramP = Typegram["TelegramP"];
/** This object represents the content of a media message to be sent. It should be one of
- InputMediaAnimation
- InputMediaDocument
- InputMediaAudio
- InputMediaPhoto
- InputMediaVideo */
export type InputMedia = Typegram["InputMedia"];
/** Represents a photo to be sent. */
export type InputMediaPhoto = Typegram["InputMediaPhoto"];
/** Represents a video to be sent. */
export type InputMediaVideo = Typegram["InputMediaVideo"];
/** Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent. */
export type InputMediaAnimation = Typegram["InputMediaAnimation"];
/** Represents an audio file to be treated as music to be sent. */
export type InputMediaAudio = Typegram["InputMediaAudio"];
/** Represents a general file to be sent. */
export type InputMediaDocument = Typegram["InputMediaDocument"];
