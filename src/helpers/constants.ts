"use strict";

export class Constants {
    public static ExtensionName: string = "appcenter";
    public static DefaulAPIEndPoint: string = "https://api.appcenter.ms";
    public static DefaultLoginEndPoint: string = "https://appcenter.ms/cli-login";
    public static AppCenterCodePushStatusBarColor: string = "#F3F3B2";
}

export class CommandNames {
    public static CommandPrefix: string = Constants.ExtensionName + ".";
    public static WhoAmI: string = CommandNames.CommandPrefix + "whoami";
    public static Login: string = CommandNames.CommandPrefix + "login";
    public static Logout: string = CommandNames.CommandPrefix + "logout";
    public static ShowMenu: string = CommandNames.CommandPrefix + "menu";
    public static Start: string = CommandNames.CommandPrefix + "start";
}

export enum MessageTypes {
    Error = 0,
    Warn = 1,
    Info = 2
}

export enum AppCenterLoginType {
    Interactive,
    Token
}