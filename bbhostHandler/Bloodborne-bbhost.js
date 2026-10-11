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

Game.SupportsMultipleKeyboardsAndMice = true;
// Deprecated options
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
Game.DrawFakeMouseCursor = false;
Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;
Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;
// This hook should always be on, regardless of input lock
Game.ProtoInput.RegisterRawInputHook = true;
// This can always be enabled, since we are going to allow/disallow raw input with the bypass function
Game.ProtoInput.GetRawInputDataHook = true;
// We will be installing/uninstalling the filters manually so there's no need to
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
// These aren't problematic to leave on, since the external "freeze fake input input" when real input ISN'T locked will prevent these from interfering
Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
// Handled on input lock/unlock, don't enable this by default
Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;
Game.ProtoInput.DrawFakeCursor = false; // This is set in the input locking
Game.ProtoInput.BlockedMessages = [ 0x0008 ]; // Blocks WM_KILLFOCUS
Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = []
;Game.ProtoInput.RenameNamedPipes = [];
// We can leave these on and not worry about input lock. // It doesn't matter if controller input still works since it won't get in the way
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;
// The old Nucleus options. Don't use these with the Xinput hook
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false
;Game.Hook.CustomDllEnabled = false;

Game.ProtoInput.AutoHideTaskbar = true;
Game.ProtoInput.OnInputLocked = function() {    
  for (var i = 0; i < PlayerList.Count; i++)    {        
    var player = PlayerList[i];
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);        
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);        
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);        
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);        
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);        
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
    // Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move moessages        
    //ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);        
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);        
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);        
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);        
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);        
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
    ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
    ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5, true, true, true, true, true);
    // Disable the bypass: let the input be processed by Proto Input        
    ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, false);    
  }
}
Game.ProtoInput.OnInputUnlocked = function(){    
  for (var i = 0; i < PlayerList.Count; i++)    {        
    var player = PlayerList[i];
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);        
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);        
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);        
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);        
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);        
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
    // Intentionally disable focus so all the instances don't respond to input at the same time        
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);        
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);        
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);        
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);        
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);        
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);        
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);        
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);
    ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
    // Intentionally disable focus so all the instances don't respond to input at the same time       
    ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);
    // Enable the bypass: allow any raw input to pass       
    ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, true);   
  }
}

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
