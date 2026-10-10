Hub.Handler.Version = 1;
Hub.Handler.Id = "apv0UYDgGi7MKk1BF";
Hub.Maintainer.Name = "framilano";
Hub.Maintainer.Id = "va6S2wcYCxth3FSgZ";

//Ask user for Bloodborne game files folder path
Game.AddOption("Bloodborne Folder Path", "Enter Bloodborne folder path (the CUSAXXXXX folder containing eboot.bin)", "bloodborneFolderPath", []);

//Ask user for Decrypted Eboot bin for patch 1.09
Game.AddOption("Decryted Eboot file from patch 1.09", "Enter eboot.bin-decrypted or eboot.elf", "decryptedEbootFilePath", []);

//Ask for the render resolution used by all instances
var resolutionOptions = ["1280x720 (16:9)", "1600x900 (16:9)", "1920x1080 (16:9)", "2560x1440 (16:9)", "3200x1800 (16:9)", "3840x2160 (16:9)", "2560x1080 (21:9)", "3440x1440 (21:9)", "5120x2160 (21:9)", "3840x1080 (32:9)", "5120x1440 (32:9)", "1280x800 (16:10)", "960x600 (16:10)", "1024x640 (16:10)"];
Game.AddOption("Render Resolution", 
  "Enter your desired render resolution for all instances", 
  "resolutionOption", 
  resolutionOptions
);

//Ask for the frame rate cap used by all instances
var framerateOptions = ["30", "60", "90", "Uncapped"];
Game.AddOption("Desidered frame rate cap", 
  "Enter your desired frame rate cap for all instances", 
  "framerateOption", 
  framerateOptions
);

/**
 //Ask if the user wants to skip the launcher
 var skipLauncherOptions = ["Yes", "No"];
 Game.AddOption("Launcher skip", 
   "Should we skip bbhost launcher?", 
   "skipLauncherOption", 
   skipLauncherOptions
 );
 * 
 */

Game.ExecutableContext = [];
Game.DirExclusions = [];
Game.KillProcessesOnClose = ["bbhost"]; //Automatically closes this list of processes (names of the executables)
Game.DirSymlinkExclusions = [];
Game.FileSymlinkExclusions = [];
Game.FileSymlinkCopyInstead = [];
Game.GameName = "Bloodborne-bbhost";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "bbhost.exe";
Game.GUID = "Bloodborne-bbhost";
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
Game.Description = 
  "Bloodborne Splitscreen Co-op based on translation layer bbhost.\n\n" +
  "Required files:\n" +
  "- Bloodborne game files\n\n" +
  "Instructions:\n" + 
  "The only required step is selecting the bbhost.exe executable, I highly suggest editing bbhost.toml settings contained in each instance AppData/Roaming/bbhost folder without using the launcher.";
Game.PauseBetweenContextAndLaunch = 3;
Game.PauseBetweenProcessGrab = 3;
Game.PauseBetweenStarts = 3;

// OUTDATED OPTIONS, DISABLED TO AVOID CONFLICTS
Game.HookSetCursorPos = false;
Game.HookGetCursorPos = false;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = false;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = false;
Game.SendNormalKeyboardInput = false;
Game.SendScrollWheel = false;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = false;
Game.HookReRegisterRawInputMouse = false;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = false;

// REQUIRED FOR MICE/KEYS
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
Game.ProtoInput.MouseWheelFilter = false;
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


/**
 * Setting bbhost-options.toml file
 * Unused because I can't fix this ghost file that tricks System.IO.File.Exists
 */
function setupBbHostOptionsConfig(handlerBbhostFolderPath, resolutionOption, framerateOption) {
  Handler.Log("[START setupBbHostOptionsConfig]");

  var handlerBbhostOptionsFilePath = System.IO.Path.Combine(Game.Folder, "bbhost-options.toml");
  var instanceBbhostOptionsFilePath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "bbhost-options.toml");

  //If the file doesn't exist, we create it first
  if (!System.IO.File.Exists(instanceBbhostOptionsFilePath)) {
    System.IO.Directory.CreateDirectory(handlerBbhostFolderPath);
    System.IO.File.Copy(handlerBbhostOptionsFilePath, instanceBbhostOptionsFilePath, true);
  }

  var framecapLineNumber = Context.FindLineNumberInTextFile(instanceBbhostOptionsFilePath, 'frame_cap = ', Nucleus.SearchType.Contains); 
  var resolutionLineNumber = Context.FindLineNumberInTextFile(instanceBbhostOptionsFilePath, 'resolution = ', Nucleus.SearchType.Contains); 

  var dict = [ 
    framecapLineNumber + '|frame_cap = "' + framerateOption + '"',
    resolutionLineNumber + '|resolution = "' + resolutionOption + '"',
  ]; 
  Context.ReplaceLinesInTextFile(instanceBbhostOptionsFilePath, dict);
  Handler.Log("[STOP setupBbHostOptionsConfig]");
}

/**
 * Setting bbhost.toml file
 */
function setupBbHostConfig(handlerBbhostFolderPath, skipLauncherOption) {
  Handler.Log("[START setupBbHostConfig]");

  var handlerBbhostFilePath = System.IO.Path.Combine(Game.Folder, "bbhost.toml");
  var instanceBbhostFilePath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "bbhost.toml");

  Handler.Log(instanceBbhostFilePath);

  //If the file doesn't exist, we ignore this setting, the launcher will run anyway
  if (!System.IO.File.Exists(instanceBbhostFilePath)) { 
    Handler.Log("File bbhost.toml doesn't exist, skipping...");
    return;
  } else {
    Handler.Log("It exists!!!");
  }

  Handler.Log("HELLO!");

  var skipLauncherLineNumber = Context.FindLineNumberInTextFile(instanceBbhostFilePath, 'setup_window = ', Nucleus.SearchType.Contains); 

  Handler.Log(skipLauncherLineNumber);

  var dict = [ 
    skipLauncherLineNumber + '|setup_window = ' + skipLauncherOption == "Yes" ? "true" : "false"
  ];
  Context.ReplaceLinesInTextFile(instanceBbhostFilePath, dict);
  Handler.Log("[STOP setupBbHostConfig]");
}

Game.Play = function() {
  //User answers
  var bloodborneFolderPath = Context.Options["bloodborneFolderPath"].trim().replace(/"/g, '');
  var decryptedEbootFilePath = Context.Options["decryptedEbootFilePath"].trim().replace(/"/g, '');
  var resolutionOption = Context.Options["resolutionOption"].split(" ")[0];
  var framerateOption = Context.Options["framerateOption"];
  //var skipLauncherOption = Context.Options["skipLauncherOption"];
  var skipLauncherOption = "No";

  var handlerBbhostFolderPath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath);


  //Setting up bbhost-options.toml
  setupBbHostOptionsConfig(handlerBbhostFolderPath, resolutionOption, framerateOption);

  //Setting up bbhost.toml
  //setupBbHostConfig(handlerBbhostFolderPath, skipLauncherOption);
  
  var instanceBbhostDataFolderPath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "data");
  Context.StartArguments = "--data \"" + instanceBbhostDataFolderPath + "\" --app0 \"" + bloodborneFolderPath + "\" --eboot \"" + decryptedEbootFilePath + "\"";
};
