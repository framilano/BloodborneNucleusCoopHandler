Hub.Handler.Version = 1;
Hub.Handler.Id = "apv0UYDgGi7MKk1BF";
Hub.Maintainer.Name = "framilano";
Hub.Maintainer.Id = "va6S2wcYCxth3FSgZ";

//Ask user for Bloodborne game files folder path
Game.AddOption("Bloodborne Folder Path", "Enter Bloodborne folder path (the CUSAXXXXX folder containing eboot.bin)", "bloodborneFolderPath", []);

//Ask user for Decrypted Eboot bin for patch 1.09
Game.AddOption("Decryted Eboot file from patch 1.09", "Enter eboot.bin-decrypted or eboot.elf", "decryptedEbootFilePath", []);

Game.ExecutableContext = [];
Game.DirExclusions = [];
Game.KillProcessesOnClose = ["bbhost"]; //Automatically closes this list of processes (names of the executables)
Game.DirSymlinkExclusions = [];
Game.FileSymlinkExclusions = [];
Game.FileSymlinkCopyInstead = [];
Game.GameName = "Bloodborne (BBHost)";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "bbhost.exe";
Game.GUID = "Bloodborne (BBHost)";
Game.LauncherTitle = "bbhost setup";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.UseNucleusEnvironment = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "Bloodborne (bbhost)";
Game.HasDynamicWindowTitle = true;
Game.RefreshWindowAfterStart = true;
Game.ResetWindows = true;
Game.SetForegroundWindowElsewhere = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.BlockRawInput = false;
Game.UserProfileSavePath = "AppData\\Roaming\\bbhost";
Game.UserProfileConfigPath = "";
Game.UserProfileSavePathNoCopy = true;
Game.UserProfileConfigPathNoCopy = true;
Game.Description = 
  "Bloodborne Splitscreen Co-op based on translation layer bbhost.\n\n" +
  "Required files:\n" +
  "- Bloodborne game files\n\n" +
  "Instructions:\n" + 
  "The only required step is selecting the bbhost.exe executable.";
Game.PauseBetweenContextAndLaunch = 0;
Game.PauseBetweenProcessGrab = 0;
Game.PauseBetweenStarts = 5;

//Input stuff
Game.SupportsMultipleKeyboardsAndMice = false;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseDinputRedirection = false;
Game.ProtoInput.DinputDeviceHook = false;
Game.ProtoInput.DinputHookAlsoHooksGetDeviceState = false;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.InjectStartup = true;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;
Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.GetCursorPosHook = true;
Game.ProtoInput.SetCursorPosHook = true;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.DrawFakeCursor = false;
Game.ProtoInput.RawInputFilter = true;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = true;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = true;
Game.ProtoInput.MouseButtonFilter = false;
Game.ProtoInput.KeyboardButtonFilter = false;
Game.ProtoInput.SendMouseWheelMessages = false;
Game.ProtoInput.SendMouseButtonMessages = false;
Game.ProtoInput.SendMouseMovementMessages = false;
Game.ProtoInput.SendKeyboardButtonMessages = false;
Game.ProtoInput.EnableFocusMessageLoop = false;
Game.ProtoInput.FocusLoopIntervalMilliseconds = 1000;
Game.ProtoInput.FocusLoop_WM_ACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = false;
Game.ProtoInput.FocusLoop_WM_NCACTIVATE = false;
Game.ProtoInput.FocusLoop_WM_SETFOCUS = false;
Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = false;
Game.ProtoInput.BlockedMessages = [0x0008, 0x0006];
Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];
Game.LockInputAtStart = false;


Game.Play = function() {
  //User answers
  var bloodborneFolderPath = Context.Options["bloodborneFolderPath"].trim().replace(/"/g, '');
  var decryptedEbootFilePath = Context.Options["decryptedEbootFilePath"].trim().replace(/"/g, '');

  var instanceBbhostConfigFilePath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "bbhost.toml");
  var instanceBbhostDataFolderPath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "data");

  Handler.Log(instanceBbhostConfigFilePath);
  Handler.Log(instanceBbhostDataFolderPath);


  Context.StartArguments = "--data \"" + instanceBbhostDataFolderPath + "\" --app0 \"" + bloodborneFolderPath + "\" --eboot \"" + decryptedEbootFilePath + "\"";
};
