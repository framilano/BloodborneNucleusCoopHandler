Hub.Handler.Version = 1;
Hub.Handler.Id = "itvyiC7oPTx2Lvb7c";
Hub.Maintainer.Name = "framilano";
Hub.Maintainer.Id = "va6S2wcYCxth3FSgZ";

//Ask user for Bloodborne game files folder path
Game.AddOption("Bloodborne Folder Path", "Enter Bloodborne folder path (the CUSAXXXXX folder containing eboot.bin)", "bloodborneFolderPath", []);

//Ask for the render resolution used by all instances
var resolutionOptions = ["1280x720 (16:9)", "1920x1080 (16:9)", "2560x1440 (16:9)", "3840x2160 (16:9)"];
Game.AddOption("Render Resolution", 
  "Enter your desired render resolution for all instances", 
  "resolutionOption", 
  resolutionOptions
);

//Ask for the frame rate cap used by all instances
var framerateOptions = ["30", "60", "90", "uncap"];
Game.AddOption("Desidered FrameRate Cap", 
  "Enter your desired frame rate cap for all instances", 
  "framerateOption", 
  framerateOptions
);

//Ask for the upscaling option used by all instances
var upscalingOptions = ["off", "fsr3 (works on all GPUs)", "fsr4 (better quality)", "fsr411 (requires fsr4.1.1 files)", "dlss (requires RTX GPU)", "taa (native antialiasing)"];
Game.AddOption("Desidered Upscaling Technology", 
  "Enter your desired upscaling technology used by all instances", 
  "upscalingOption", 
  upscalingOptions
);

//Ask for credentials for each instance
Game.AddOption("Player 0 Shadnet Username", "Enter your Player0 username for shadnet", "shadnetPlayer0HunterUsername", []);
Game.AddOption("Player 0 Shadnet Password", "Enter your Player0 password shadnet", "shadnetPlayer0HunterPassword", []);
Game.AddOption("Player 1 Shadnet Username", "Enter your Player1 username for shadnet", "shadnetPlayer1HunterUsername", []);
Game.AddOption("Player 1 Shadnet Password", "Enter your Player1 password shadnet", "shadnetPlayer1HunterPassword", []);
Game.AddOption("Player 2 Shadnet Username", "Enter your Player2 username for shadnet", "shadnetPlayer2HunterUsername", []);
Game.AddOption("Player 2 Shadnet Password", "Enter your Player2 password shadnet", "shadnetPlayer2HunterPassword", []);
Game.AddOption("Player 3 Shadnet Username", "Enter your Player3 username for shadnet", "shadnetPlayer3HunterUsername", []);
Game.AddOption("Player 3 Shadnet Password", "Enter your Player3 password shadnet", "shadnetPlayer3HunterPassword", []);

Game.ExecutableContext = [];
Game.DirExclusions = [];
Game.KillProcessesOnClose = []; //Automatically closes this list of processes (names of the executables)
Game.DirSymlinkExclusions = [];
Game.FileSymlinkExclusions = [];
Game.FileSymlinkCopyInstead = [];
Game.GameName = "Bloodborne-bbport";
Game.HandlerInterval = 100;
Game.SymlinkGame = true;
Game.HardlinkGame = true;
Game.ForceProcessPick = true;
Game.ExecutableNames = ["Bloodborne.exe", "bb-probe.exe", "Play Bloodborne.exe"]
Game.ExecutableName = "Bloodborne.exe";
Game.GUID = "Bloodborne-bbport";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.UseNucleusEnvironment = true;
Game.Hook.ForceFocus = true;
Game.FakeFocus = true;
Game.Hook.ForceFocusWindowName = "Bloodborne™";
Game.HasDynamicWindowTitle = true;
Game.RefreshWindowAfterStart = false;
Game.ResetWindows = false;
Game.SetForegroundWindowElsewhere = false;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.BlockRawInput = false;
Game.UserProfileSavePath = "AppData\\Roaming\\bbport-launcher";
Game.Description = 
  "Bloodborne Splitscreen Co-op based on translation layer bbport.\n\n" +
  "Required files:\n" +
  "- Bloodborne game files\n\n" +
  "Instructions:\n" + 
  "The only required step is selecting the Bloodborne.exe executable.";
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
 * Editing settings.json
 */
function setupBbPortSettingsConfig(handlerBbportFolderPath, bloodborneFolderPath, framerateOption, hunter) {
  Context.Log("[START setupBbPortSettingsConfig]");

  var handlerBbportSettingsFilePath = System.IO.Path.Combine(Game.Folder, "settings.json");
  var instanceBbportSettingsFilePath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "settings.json");

  var instanceBbportUserFolderPath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "user");

  //Creating user folder if it doesn't exist
  if (!System.IO.Directory.Exists(instanceBbportUserFolderPath)) {
    Context.Log("Created user directory in " + instanceBbportUserFolderPath);
    System.IO.Directory.CreateDirectory(instanceBbportUserFolderPath);
  }

  //If the file doesn't exist, we create it first
  if (!System.IO.File.Exists(instanceBbportSettingsFilePath)) {
    Context.Log("Created settings.json in " + instanceBbportSettingsFilePath);
    System.IO.Directory.CreateDirectory(handlerBbportFolderPath);
    System.IO.File.Copy(handlerBbportSettingsFilePath, instanceBbportSettingsFilePath, true);
  }

  var gameDirLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'game_dir', Nucleus.SearchType.Contains); 
  var userDirLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'user_dir', Nucleus.SearchType.Contains); 
  var userDirLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'user_dir', Nucleus.SearchType.Contains); 
  var fpsModeLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'fps_mode', Nucleus.SearchType.Contains); 
  var shadnetUsernameLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_npid', Nucleus.SearchType.Contains); 
  var shadnetPasswordLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_password', Nucleus.SearchType.Contains); 

  var hunterUsername = Context.Options["shadnetPlayer" + Context.PlayerID + "HunterUsername"].trim();
  var hunterPassword = Context.Options["shadnetPlayer" + Context.PlayerID + "HunterPassword"].trim();

  var dict = [ 
    gameDirLineNumber + '|  "game_dir": "' + bloodborneFolderPath.replace(/\\/g, "/") + '",',
    userDirLineNumber + '|  "user_dir": "' + instanceBbportUserFolderPath.replace(/\\/g, "/") +'",',
    fpsModeLineNumber + '|  "fps_mode": "'+ framerateOption +'",',
    shadnetUsernameLineNumber + '|  "online_npid": "' + hunterUsername +'",',
    shadnetPasswordLineNumber + '|  "online_password": "' + hunterPassword +'",',
  ]; 

  Context.ReplaceLinesInTextFile(instanceBbportSettingsFilePath, dict);
  Context.Log("[STOP setupBbPortSettingsConfig]");
}

/**
 * Editing content instance bbport.ini
 */
function setupBbPortIniConfig(instanceBbPortContentFolderPath, resolutionOption, upscalingOption) {
  Context.Log("[START setupBbPortIniConfig]");

  var handlerBbPortInitFilePath = System.IO.Path.Combine(Game.Folder, "bbport.ini");
  var instanceBbPortInitFilePath = System.IO.Path.Combine(instanceBbPortContentFolderPath, "bbport.ini");

  //Creating bbport.ini
  if (!System.IO.File.Exists(instanceBbPortInitFilePath)) {
    Context.Log("Created bbport.ini in " + instanceBbPortInitFilePath);
    System.IO.File.Copy(handlerBbPortInitFilePath, instanceBbPortInitFilePath, true);
  }

  var upscalingLineNumber = Context.FindLineNumberInTextFile(instanceBbPortInitFilePath, 'upscaler', Nucleus.SearchType.Contains); 
  var resolutionLineNumber = Context.FindLineNumberInTextFile(instanceBbPortInitFilePath, 'output_res', Nucleus.SearchType.Contains); 

  var dict = [ 
    upscalingLineNumber + '|upscaler=' + upscalingOption,
    resolutionLineNumber + '|output_res=' + resolutionOption,
  ]; 

  Context.ReplaceLinesInTextFile(instanceBbPortInitFilePath, dict);
  Context.Log("[STOP setupBbPortIniConfig]");
}

Game.Play = function() {
  //User answers
  var bloodborneFolderPath = Context.Options["bloodborneFolderPath"].trim().replace(/"/g, '');
  var resolutionOption = Context.Options["resolutionOption"].split(" ")[0];
  var framerateOption = Context.Options["framerateOption"];
  var upscalingOption = Context.Options["upscalingOption"].split(" ")[0];


  var handlerBbportFolderPath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath);
  //Setting up settings.json first
  setupBbPortSettingsConfig(handlerBbportFolderPath, bloodborneFolderPath, framerateOption);

  var instanceBbPortContentFolderPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder);
  //Setting up bbport.ini
  setupBbPortIniConfig(instanceBbPortContentFolderPath, resolutionOption, upscalingOption);

  Game.ExecutableToLaunch = System.IO.Path.Combine(instanceBbPortContentFolderPath, "Play Bloodborne.exe");
};
