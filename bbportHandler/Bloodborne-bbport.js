Hub.Handler.Version = 1;
Hub.Handler.Id = "itvyiC7oPTx2Lvb7c";
Hub.Maintainer.Name = "framilano";
Hub.Maintainer.Id = "va6S2wcYCxth3FSgZ";

const LOCAL_IP = "http://127.0.0.1";
const SHADPS4_STATS_URL = "thehuntersdream.com";
const SHADNET_STATS_FORK = "clsamg22-stats-coop-server";
const SHADNET_COOP_FORK = "clsamg22-stats-coop-server";

//#################### Handler Options ####################

//Ask user for Bloodborne game files folder path
Game.AddOption("Bloodborne Folder Path", "Enter Bloodborne folder path (the CUSAXXXXX folder containing eboot.bin)", "bloodborneFolderPath", []);

//Stats Server IP option
Game.AddOption(
  "Stats Server URL",
  "Enter your desired stats server url for Bloodborne, suggested ones are:\n" +
  "- http://127.0.0.1, will setup locally a stats server,\n" +
  "- https://play.seamlesshunt.com, will connect to BBSC official coop server\n" +
  "- https://thehuntersdream.com, will connect you to the shadPS4 team hosted stats server",
  "statsServerUrlOption", 
  []
);

//Coop Server IP option
Game.AddOption(
  "Co-op Server URL",
  "Enter your desired co-op server url for Bloodborne, suggested ones are:\n" +
  "- http://127.0.0.1, will setup locally a coop server\n" +
  "- https://play.seamlesshunt.com, will connect to BBSC official coop server\n" +
  "- http://srv.shadps4.net, will connect to official shadnet servers",
  "coopServerUrlOption", 
  []
);

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

//Ask if we should enable seamless support
var seamlessOptions = ["Yes", "No"];
Game.AddOption(
  "Seamless Support", 
  "Shall we enable Classmg22 Seamless support? (Only makes sense if you selected a co-op server option that supports this feature)", 
  "seamlessOption", 
  seamlessOptions
);

//Ask for credentials for each instance
Game.AddOption("Player 0 Shadnet Username", "Enter your Player0 username for shadnet (empty if using 127.0.0.1 coop server)", "shadnetPlayer0HunterUsername", []);
Game.AddOption("Player 0 Shadnet Password", "Enter your Player0 password shadnet (empty if using 127.0.0.1 coop server)", "shadnetPlayer0HunterPassword", []);
Game.AddOption("Player 1 Shadnet Username", "Enter your Player1 username for shadnet (empty if using 127.0.0.1 coop server)", "shadnetPlayer1HunterUsername", []);
Game.AddOption("Player 1 Shadnet Password", "Enter your Player1 password shadnet (empty if using 127.0.0.1 coop server)", "shadnetPlayer1HunterPassword", []);
Game.AddOption("Player 2 Shadnet Username", "Enter your Player2 username for shadnet (empty if using 127.0.0.1 coop server)", "shadnetPlayer2HunterUsername", []);
Game.AddOption("Player 2 Shadnet Password", "Enter your Player2 password shadnet (empty if using 127.0.0.1 coop server)", "shadnetPlayer2HunterPassword", []);
Game.AddOption("Player 3 Shadnet Username", "Enter your Player3 username for shadnet (empty if using 127.0.0.1 coop server)", "shadnetPlayer3HunterUsername", []);
Game.AddOption("Player 3 Shadnet Password", "Enter your Player3 password shadnet (empty if using 127.0.0.1 coop server)", "shadnetPlayer3HunterPassword", []);

//#################### Game Info ####################

Game.ExecutableName = "Bloodborne.exe";                      
Game.GUID = "Bloodborne-bbport";
Game.GameName = "Bloodborne-bbport";
Game.MaxPlayersOneMonitor = 4;
Game.MaxPlayers = 4;

//#################### File System ####################

Game.HardlinkGame = true;
Game.RunLauncherAndExe = false;
Game.ExecutableNames = ["Bloodborne.exe", "bb-probe.exe", "Play Bloodborne.exe"]

//#################### Nucleus Co-op Environment ####################

Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\Roaming\\bbport-launcher";

//#################### Focus ####################

Game.LauncherTitle = "Bloodborne -- bbport";
Game.LauncherExe = "Play Bloodborne.exe"
Game.ExecutableName = "Play Bloodborne.exe"
Game.SetTopMostAtEnd = true;

//#################### Extra ####################

Game.PauseBetweenContextAndLaunch = 0;
Game.PauseBetweenProcessGrab = 0;
Game.PauseBetweenStarts = 0;
Game.Description = 
  "Bloodborne Splitscreen Co-op based on translation layer bbport.\n\n" +
  "Required files:\n" +
  "- Bloodborne game files\n\n" +
  "Instructions:\n" + 
  "The only required step is selecting the \"Play Bloodborne.exe\" executable.";
Game.KillProcessesOnClose = [ "BBSC-GameServer", "shadnet" ];

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

/*
 * Setting up stats shadnet server
 */
function setupLocalStatsShadnetServer() {
  Handler.Log("[START setupStatsShadnetServer]");

  var executable = "BBSC-GameServer.exe";
  var execArgs = "--shadnet 127.0.0.1 --host 127.0.0.1";
  var handlerStatsExecutableFilePath = System.IO.Path.Combine(Game.Folder, "shadnet", SHADNET_STATS_FORK, executable);
  Context.StartProcess(handlerStatsExecutableFilePath, execArgs, false);

  Handler.Log("[STOP setupStatsShadnetServer]");
}

/**
 * Setting up shadnet server and register clients manually
 */
function setupLocalCoopShadnetServer(seamlessOption) {
  Handler.Log("[START setupCoopShadnetServer]");

  //Server setup only during first instance launch  
  if (Context.PlayerID == 0) {
      //Enabling Seamless if requested by the user
    var handlerShadnetConfigFilePath = System.IO.Path.Combine(Game.Folder, "shadnet", SHADNET_COOP_FORK, "shadnet.cfg");
    var seamlessLineNumber = Context.FindLineNumberInTextFile(handlerShadnetConfigFilePath, 'BloodborneSeamlessCoop', Nucleus.SearchType.Contains); 
    if (seamlessOption == "Yes") var dict = [ seamlessLineNumber + '|BloodborneSeamlessCoop=true', ]; 
    else var dict = [ seamlessLineNumber + '|BloodborneSeamlessCoop=false', ]; 
    Context.ReplaceLinesInTextFile(handlerShadnetConfigFilePath, dict);
    //Start main coop server
    var handlerShadnetExecutableFilePath = System.IO.Path.Combine(Game.Folder, "shadnet", SHADNET_COOP_FORK, "shadnet.exe");
    Context.StartProcess(handlerShadnetExecutableFilePath, "", false);
    System.Threading.Thread.Sleep(3000); //Wait a bit before registering the clients
  }

  //Register Hunter on the server for each instance
  var handlerShadnetSampleExecutableFilePath = System.IO.Path.Combine(Game.Folder,  "shadnet", SHADNET_COOP_FORK, "shadnet-sample.exe");
  Context.StartProcess(handlerShadnetSampleExecutableFilePath, "127.0.0.1 31313 register Hunter" + Context.PlayerID + " 12345 hunter" + Context.PlayerID + "@placeholder.com NucleusCoopBloodborneHandler", false)
  Handler.Log("[STOP setupCoopShadnetServer]");
}

/**
 * Editing settings.json
 */
function setupBbPortSettingsConfig(bloodborneFolderPath, framerateOption, statsServerUrlOption, coopServerUrlOption) {
  Handler.Log("[START setupBbPortSettingsConfig]");

  var handlerBbportSettingsFilePath = System.IO.Path.Combine(Game.Folder, "config\\settings.json");
  var instanceBbportSettingsFilePath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "settings.json");

  var instanceBbportUserFolderPath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "user");

  //Creating user folder if it doesn't exist
  if (!System.IO.Directory.Exists(instanceBbportUserFolderPath)) {
    Handler.Log("Created user directory in " + instanceBbportUserFolderPath);
    System.IO.Directory.CreateDirectory(instanceBbportUserFolderPath);
  }
  
  //Replacing existing settings.json
  System.IO.File.Copy(handlerBbportSettingsFilePath, instanceBbportSettingsFilePath, true);

  var gameDirLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'game_dir', Nucleus.SearchType.Contains); 
  var userDirLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'user_dir', Nucleus.SearchType.Contains); 
  var fpsModeLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'fps_mode', Nucleus.SearchType.Contains); 
  var onlineLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, '"online":', Nucleus.SearchType.Contains); 
  var onlineCustomServersLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_custom_servers', Nucleus.SearchType.Contains); 
  var shadnetUsernameLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_npid', Nucleus.SearchType.Contains); 
  var shadnetPasswordLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_password', Nucleus.SearchType.Contains); 
  var shadnetCoopServerLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_server', Nucleus.SearchType.Contains); 
  var shadnetStatsServerLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_community', Nucleus.SearchType.Contains); 
  var shadnetWebApiLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_webapi', Nucleus.SearchType.Contains); 


  var hunterUsername = coopServerUrlOption == LOCAL_IP ? "Hunter" + Context.PlayerID : Context.Options["shadnetPlayer" + Context.PlayerID + "HunterUsername"].trim();
  var hunterPassword = coopServerUrlOption == LOCAL_IP ? "12345" : Context.Options["shadnetPlayer" + Context.PlayerID + "HunterPassword"].trim();

  var dict = [ 
    gameDirLineNumber + "|  \"game_dir\": \"" + bloodborneFolderPath.replace(/\\/g, "/") + "\"" + (gameDirLineNumber != 38 ? "," : ""),
    userDirLineNumber + '|  "user_dir": "' + instanceBbportUserFolderPath.replace(/\\/g, "/") +'",',
    fpsModeLineNumber + '|  "fps_mode": "'+ framerateOption +'",',
    onlineLineNumber + '|  "online": true,',
    onlineCustomServersLineNumber + '|  "online_custom_servers": true,',
    shadnetUsernameLineNumber + '|  "online_npid": "' + hunterUsername +'",',
    shadnetPasswordLineNumber + '|  "online_password": "' + hunterPassword +'",',
    shadnetCoopServerLineNumber + '|  "online_server": "' + coopServerUrlOption.replace("http://", "").replace("https://", "") +':31313",',
    shadnetStatsServerLineNumber + '|  "online_community": "' + statsServerUrlOption + ':20443",',
    shadnetWebApiLineNumber + '|  "online_webapi": "' + coopServerUrlOption + ':31315",',
  ]; 

  Context.ReplaceLinesInTextFile(instanceBbportSettingsFilePath, dict);
  Handler.Log("[STOP setupBbPortSettingsConfig]");
}

/**
 * Editing content instance bbport.ini
 */
function setupBbPortIniConfig(instanceBbPortContentFolderPath, resolutionOption, upscalingOption, upscalingPresetOption) {
  Handler.Log("[START setupBbPortIniConfig]");

  var handlerBbPortInitFilePath = System.IO.Path.Combine(Game.Folder, "config\\bbport.ini");
  var instanceBbPortInitFilePath = System.IO.Path.Combine(instanceBbPortContentFolderPath, "bbport.ini");
  var instanceBbportUserFolderPath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "user");

  //Creating user folder if it doesn't exist
  if (!System.IO.Directory.Exists(instanceBbportUserFolderPath)) {
    Handler.Log("Created user directory in " + instanceBbportUserFolderPath);
    System.IO.Directory.CreateDirectory(instanceBbportUserFolderPath);
  }
  
  //Replacing existing settings.json
  System.IO.File.Copy(handlerBbPortInitFilePath, instanceBbPortInitFilePath, true);

  var upscalingLineNumber = Context.FindLineNumberInTextFile(instanceBbPortInitFilePath, 'upscaler', Nucleus.SearchType.Contains); 
  var upscalingPresetLineNumber = Context.FindLineNumberInTextFile(instanceBbPortInitFilePath, 'preset', Nucleus.SearchType.Contains); 
  var resolutionLineNumber = Context.FindLineNumberInTextFile(instanceBbPortInitFilePath, 'output_res', Nucleus.SearchType.Contains); 
  var skipIntroLineNumber = Context.FindLineNumberInTextFile(instanceBbPortInitFilePath, 'skip_intro', Nucleus.SearchType.Contains); 

  var dict = [ 
    upscalingLineNumber + '|upscaler=' + upscalingOption,
    upscalingPresetLineNumber + '|preset=' + upscalingPresetOption,
    resolutionLineNumber + '|output_res=' + resolutionOption,
    skipIntroLineNumber + '|skip_intro=1',
  ]; 

  Context.ReplaceLinesInTextFile(instanceBbPortInitFilePath, dict);
  Handler.Log("[STOP setupBbPortIniConfig]");
}

/**
 * Editing and preparing host_overrides.custom.json for BBSC
 */
function setupCustomHostOverrides(coopServerUrlOption) {
  Handler.Log("[START setupCustomHostOverrides]");

  var handlerCustomHostOverridesFilePath = System.IO.Path.Combine(Game.Folder, "bbsc-splitscreen-files\\host_overrides.custom.json");
  var instanceCustomHostOverridesFilePath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "user", "host_overrides.custom.json");
  System.IO.File.Copy(handlerCustomHostOverridesFilePath, instanceCustomHostOverridesFilePath, true);

  var dict = [ 
    '2|    "https://ss4.scej-network.jp:20443":  "' + coopServerUrlOption + ':20443",',
    '3|    "http://thehuntersdream.com:18671/summon_messenger":  "' + coopServerUrlOption + ':31315",',
    '4|    "https://thehuntersdream.com:18671/summon_messenger":  "' + coopServerUrlOption + ':31315",'
  ]; 

  Context.ReplaceLinesInTextFile(instanceCustomHostOverridesFilePath, dict);
  Handler.Log("[STOP setupCustomHostOverrides]");
}

Game.Play = function() {


  //User answers
  var bloodborneFolderPath = Context.Options["bloodborneFolderPath"].trim().replace(/"/g, '');
  var resolutionOption = Context.Options["resolutionOption"].split(" ")[0];
  var framerateOption = Context.Options["framerateOption"];
  var upscalingOption = Context.Options["upscalingOption"].split(" ")[0];
  var upscalingPresetOption = Context.Options["upscalingPresetOption"].split(" ")[0];
  var statsServerUrlOption = Context.Options["statsServerUrlOption"].trim();
  var coopServerUrlOption = Context.Options["coopServerUrlOption"].trim();
  var seamlessOption = Context.Options["seamlessOption"].trim();

  //Run the servers and register the clients
  if (statsServerUrlOption == LOCAL_IP && Context.PlayerID == 0) setupLocalStatsShadnetServer();

  //Set up coop server
  if (coopServerUrlOption == LOCAL_IP) setupLocalCoopShadnetServer(seamlessOption);

  //Setting up settings.json first
  setupBbPortSettingsConfig(bloodborneFolderPath, framerateOption, statsServerUrlOption, coopServerUrlOption);

  var instanceBbPortContentFolderPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder);

  //Setting up bbport.ini
  setupBbPortIniConfig(instanceBbPortContentFolderPath, resolutionOption, upscalingOption, upscalingPresetOption);

  //Paste bbsc files if seamless is enabled
  if (seamlessOption == "Yes") {
    var handlerBbscFolderPath = System.IO.Path.Combine(Game.Folder, "bbsc-files");
  
    //Copying BBSC files to instance bbport folder
    var instanceBbPortContentFolderPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder);
    Context.CopyFolder(handlerBbscFolderPath, instanceBbPortContentFolderPath);
    System.Environment.SetEnvironmentVariable("BB_PROBE", "bbsc\\bbsc-launch.exe");
    System.Environment.SetEnvironmentVariable("BBSC_EMULATOR", "emulator\\bb-probe.exe");

    setupCustomHostOverrides(coopServerUrlOption)
  }
  
  Context.StartArguments = "--play";
  Game.ExecutableName = System.IO.Path.Combine(instanceBbPortContentFolderPath, "emulator", "bb-probe.exe");
};