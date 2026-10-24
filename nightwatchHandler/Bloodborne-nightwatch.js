Hub.Handler.Version = 1;
Hub.Handler.Id = "OiAytkyPRqK9p056G";
Hub.Maintainer.Name = "framilano";
Hub.Maintainer.Id = "va6S2wcYCxth3FSgZ";


//#################### Handler Options ####################

//Ask user for Bloodborne game files folder path
Game.AddOption("Bloodborne Folder Path", "Enter Bloodborne folder path (the CUSAXXXXX folder containing eboot.bin)", "bloodborneFolderPath", []);

//Ask for the render resolution used by all instances
var resolutionOptions = ["1280x720 (16:9)", "1920x1080 (16:9)", "2560x1440 (16:9)", "3840x2160 (16:9)", "2560x1080 (21:9)", "3440x1440 (21:9)", "3840x1600 (21:9)", "5120x2160 (21:9)", "3840x1080 (32:9)", "5120x1440 (32:9)"];
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
var upscalingOptions = ["off", "fsr3 (works on all GPUs)", "fsr4 (better quality)", "fsr411 (even better quality)", "dlss (requires RTX GPU)", "taa (native antialiasing)"];
Game.AddOption("Desidered Upscaling Technology", 
  "Enter your desired upscaling technology used by all instances", 
  "upscalingOption", 
  upscalingOptions
);

//Ask for the upscaling option used by all instances
var upscalingPresetOptions = ["0 - Native AA", "1 - Quality", "2 - Balanced", "3 - Performance", "4 - Ultra Performance"];
Game.AddOption("Desidered Upscaling Preset", 
  "Enter your desired upscaling preset used by all instances", 
  "upscalingPresetOption", 
  upscalingPresetOptions
);


//#################### Game Info ####################

Game.GUID = "Bloodborne-nightwatch";
Game.GameName = "Bloodborne-nightwatch";
Game.MaxPlayersOneMonitor = 4;
Game.MaxPlayers = 4;

//#################### File System ####################

Game.HardlinkGame = true;

//#################### Nucleus Co-op Environment ####################

Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\Roaming\\bloodborne-seamless";

//#################### Focus ####################

Game.SetTopMostAtEnd = true;
Game.LauncherTitle = "Nightwatch Co-op";
Game.LauncherExe = "Nightwatch Co-op.exe"
Game.ExecutableName = "Nightwatch Co-op.exe"

//#################### Extra ####################

Game.PauseBetweenContextAndLaunch = 0;
Game.PauseBetweenProcessGrab = 20;
Game.PauseBetweenStarts = 0;
Game.Description = 
  "Bloodborne Splitscreen Co-op based on Nightwatch Co-op.\n\n" +
  "Required files:\n" +
  "- Bloodborne game files\n" +
  "- Nightwatch Co-op files\n\n" +
  "Instructions:\n" + 
  "The only required step is selecting the \"Nightwatch Co-op.exe\" executable.";

//#################### ProtoInput ####################

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
// We can leave these on and not worry about input lock. 
// It doesn't matter if controller input still works since it won't get in the way
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

/**
 * Editing settings.json
 */
function setupNightwatchSettingsConfig(bloodborneFolderPath, framerateOption) {
  Handler.Log("[START setupNightwatchSettingsConfig]");

  var handlerNightwatchSettingsFilePath = System.IO.Path.Combine(Game.Folder, "config\\settings.json");
  var instanceUserProfilePath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath);
  var instanceNightwatchSettingsFilePath = System.IO.Path.Combine(instanceUserProfilePath, "settings.json");

  var instanceNightwatchUserFolderPath = System.IO.Path.Combine(instanceUserProfilePath, "user");

  //Creating roaming nightwatch folder if it doesn't exist
  if (!System.IO.Directory.Exists(instanceUserProfilePath)) {
    Handler.Log("Created nightwatch directory in " + instanceUserProfilePath);
    System.IO.Directory.CreateDirectory(instanceUserProfilePath);
  }

  //Creating user folder if it doesn't exist
  if (!System.IO.Directory.Exists(instanceNightwatchUserFolderPath)) {
    Handler.Log("Created user directory in " + instanceNightwatchUserFolderPath);
    System.IO.Directory.CreateDirectory(instanceNightwatchUserFolderPath);
  }
  
  //Replacing existing settings.json
  System.IO.File.Copy(handlerNightwatchSettingsFilePath, instanceNightwatchSettingsFilePath, true);

  var gameDirLineNumber = Context.FindLineNumberInTextFile(instanceNightwatchSettingsFilePath, 'game_dir', Nucleus.SearchType.Contains); 
  var userDirLineNumber = Context.FindLineNumberInTextFile(instanceNightwatchSettingsFilePath, 'user_dir', Nucleus.SearchType.Contains); 
  var fpsModeLineNumber = Context.FindLineNumberInTextFile(instanceNightwatchSettingsFilePath, 'fps_mode', Nucleus.SearchType.Contains); 
  var partyNameLineNumber = Context.FindLineNumberInTextFile(instanceNightwatchSettingsFilePath, 'party_name', Nucleus.SearchType.Contains); 
  var partyCodeLineNumber = Context.FindLineNumberInTextFile(instanceNightwatchSettingsFilePath, 'party_code', Nucleus.SearchType.Contains); 
  var partyModeLineNumber = Context.FindLineNumberInTextFile(instanceNightwatchSettingsFilePath, 'party_mode', Nucleus.SearchType.Contains); 
  var partyMaxSizeLineNumber = Context.FindLineNumberInTextFile(instanceNightwatchSettingsFilePath, 'party_max', Nucleus.SearchType.Contains); 

  Handler.Log("Bloodborne path: " + bloodborneFolderPath);
  Handler.Log("User path: " + instanceNightwatchUserFolderPath);

  var dict = [ 
    gameDirLineNumber + '|  "game_dir": "' + bloodborneFolderPath.replace(/\\/g, "\\\\") + '",',
    userDirLineNumber + '|  "user_dir": "' + instanceNightwatchUserFolderPath.replace(/\\/g, "\\\\") +'",',
    fpsModeLineNumber + '|  "fps_mode": "'+ framerateOption +'",',
    partyNameLineNumber + '|  "party_name": "' + Player.Nickname + '",',
    partyModeLineNumber + '|  "party_mode": "host",',
    partyMaxSizeLineNumber + '|  "party_max": "' + PlayerList.Count + '"'
  ]; 

  Context.ReplaceLinesInTextFile(instanceNightwatchSettingsFilePath, dict);

  //If a guest, join with local ip
  if (Context.PlayerID != 0) {
    var dict = [ 
      partyModeLineNumber + '|  "party_mode": "join",',
      partyCodeLineNumber + '|  "party_code": "127.0.0.1:9307",',
    ]; 
    Context.ReplaceLinesInTextFile(instanceNightwatchSettingsFilePath, dict);
  }

  Handler.Log("[STOP setupNightwatchSettingsConfig]");
}

/**
 * Editing content instance bbport.ini
 */
function setupNightwatchIniConfig(instanceNightwatchContentFolderPath, resolutionOption, upscalingOption, upscalingPresetOption) {
  Handler.Log("[START setupNightwatchIniConfig]");

  var handlerNightwatchInitFilePath = System.IO.Path.Combine(Game.Folder, "config\\bbport.ini");
  var instanceNightwatchInitFilePath = System.IO.Path.Combine(instanceNightwatchContentFolderPath, "bbport.ini");
  
  //Replacing existing bbport.ini
  System.IO.File.Copy(handlerNightwatchInitFilePath, instanceNightwatchInitFilePath, true);

  var upscalingLineNumber = Context.FindLineNumberInTextFile(instanceNightwatchInitFilePath, 'upscaler', Nucleus.SearchType.Contains); 
  var upscalingPresetLineNumber = Context.FindLineNumberInTextFile(instanceNightwatchInitFilePath, 'preset', Nucleus.SearchType.Contains); 
  var resolutionLineNumber = Context.FindLineNumberInTextFile(instanceNightwatchInitFilePath, 'output_res', Nucleus.SearchType.Contains); 
  var skipIntroLineNumber = Context.FindLineNumberInTextFile(instanceNightwatchInitFilePath, 'skip_intro', Nucleus.SearchType.Contains); 

  var dict = [ 
    upscalingLineNumber + '|upscaler=' + upscalingOption,
    upscalingPresetLineNumber + '|preset=' + upscalingPresetOption,
    resolutionLineNumber + '|output_res=' + resolutionOption,
    skipIntroLineNumber + '|skip_intro=1',
  ]; 

  Context.ReplaceLinesInTextFile(instanceNightwatchInitFilePath, dict);
  Handler.Log("[STOP setupNightwatchIniConfig]");
}


Game.Play = function() {
  //User answers
  var bloodborneFolderPath = Context.Options["bloodborneFolderPath"].trim().replace(/"/g, '');
  var resolutionOption = Context.Options["resolutionOption"].split(" ")[0];
  var framerateOption = Context.Options["framerateOption"];
  var upscalingOption = Context.Options["upscalingOption"].split(" ")[0];
  var upscalingPresetOption = Context.Options["upscalingPresetOption"].split(" ")[0];

  //Setting up settings.json first
  setupNightwatchSettingsConfig(bloodborneFolderPath, framerateOption);

  var instanceNightwatchContentFolderPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder);

  //Setting up bbport.ini
  setupNightwatchIniConfig(instanceNightwatchContentFolderPath, resolutionOption, upscalingOption, upscalingPresetOption);
  
  Context.StartArguments = "--play";
  Game.ExecutableName = System.IO.Path.Combine(instanceNightwatchContentFolderPath, "engine", "out", "bb-probe.exe");
};