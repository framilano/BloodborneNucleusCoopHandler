Hub.Handler.Version = 1;
Hub.Handler.Id = "itvyiC7oPTx2Lvb7c";
Hub.Maintainer.Name = "framilano";
Hub.Maintainer.Id = "va6S2wcYCxth3FSgZ";

const LOCAL_IP = "127.0.0.1";
const SHADPS4_STATS_URL = "thehuntersdream.com";
const SHADNET_STATS_FORK = "clsamg22-stats-coop-server";
const SHADNET_COOP_FORK = "clsamg22-stats-coop-server";

//#################### Handler Options ####################

//Ask user for Bloodborne game files folder path
Game.AddOption("Bloodborne Folder Path", "Enter Bloodborne folder path (the CUSAXXXXX folder containing eboot.bin)", "bloodborneFolderPath", []);

//Stats Server IP option
Game.AddOption(
  "Stats Server IP",
  "Enter your desired stats server ip for Bloodborne, suggested ones are:\n" +
  "- 127.0.0.1, will setup locally a stats server,\n" +
  "- play.seamlesshunt.com, will connect to BBSC official coop server\n" +
  "- thehuntersdream.com, will connect you to the shadPS4 team hosted stats server",
  "statsServerIpOption", 
  []
);

//Coop Server IP option
Game.AddOption(
  "Co-op Server IP",
  "Enter your desired co-op server ip for Bloodborne, suggested ones are:\n" +
  "- 127.0.0.1, will setup locally a coop server\n" +
  "- play.seamlesshunt.com, will connect to BBSC official coop server",
  "coopServerIpOption", 
  []
);

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
//Game.DirSymlinkCopyInstead = ["bin"];
//Game.FileSymlinkCopyInstead = ["Bloodborne.exe", "Play Bloodborne.exe", "bbport.ini"];
Game.RunLauncherAndExe = false;
Game.ExecutableNames = ["Bloodborne.exe", "bb-probe.exe", "Play Bloodborne.exe"]

//#################### Nucleus Co-op Environment ####################

Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\Roaming\\bbport-launcher";

//#################### Focus ####################


Game.ForceProcessPick = true;
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
  "The only required step is selecting the Bloodborne.exe executable.";
Game.ForceProcessSearch = false;
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
function setupStatsShadnetServer() {
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
function setupCoopShadnetServer() {
  Handler.Log("[START setupCoopShadnetServer]");

  //Server setup only during first instance launch  
  if (Context.PlayerID == 0) {
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
function setupBbPortSettingsConfig(bloodborneFolderPath, framerateOption, statsServerIpOption, coopServerIpOption) {
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
  var shadnetUsernameLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_npid', Nucleus.SearchType.Contains); 
  var shadnetPasswordLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_password', Nucleus.SearchType.Contains); 
  var shadnetCoopServerLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_server', Nucleus.SearchType.Contains); 
  var shadnetStatsServerLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_community', Nucleus.SearchType.Contains); 

  var statsServerUrl = statsServerIpOption == LOCAL_IP ? "http://127.0.0.1:31313" : "http://" + statsServerIpOption + ":31313";

  var hunterUsername = coopServerIpOption == LOCAL_IP ? "Hunter" + Context.PlayerID : Context.Options["shadnetPlayer" + Context.PlayerID + "HunterUsername"].trim();
  var hunterPassword = coopServerIpOption == LOCAL_IP ? "12345" : Context.Options["shadnetPlayer" + Context.PlayerID + "HunterPassword"].trim();

  var dict = [ 
    gameDirLineNumber + "|  \"game_dir\": \"" + bloodborneFolderPath.replace(/\\/g, "/") + "\"" + (gameDirLineNumber != 38 ? "," : ""),
    userDirLineNumber + '|  "user_dir": "' + instanceBbportUserFolderPath.replace(/\\/g, "/") +'",',
    fpsModeLineNumber + '|  "fps_mode": "'+ framerateOption +'",',
    shadnetUsernameLineNumber + '|  "online_npid": "' + hunterUsername +'",',
    shadnetPasswordLineNumber + '|  "online_password": "' + hunterPassword +'",',
    shadnetCoopServerLineNumber + '|  "online_server": "' + coopServerIpOption +':31313",',
    shadnetStatsServerLineNumber + '|  "online_community": "' + statsServerUrl + '",'
  ]; 

  Context.ReplaceLinesInTextFile(instanceBbportSettingsFilePath, dict);
  Handler.Log("[STOP setupBbPortSettingsConfig]");
}

/**
 * Editing content instance bbport.ini
 */
function setupBbPortIniConfig(instanceBbPortContentFolderPath, resolutionOption, upscalingOption) {
  Handler.Log("[START setupBbPortIniConfig]");

  var handlerBbPortInitFilePath = System.IO.Path.Combine(Game.Folder, "config\\bbport.ini");
  var instanceBbPortInitFilePath = System.IO.Path.Combine(instanceBbPortContentFolderPath, "bbport.ini");

  //Creating bbport.ini
  if (!System.IO.File.Exists(instanceBbPortInitFilePath)) {
    Handler.Log("Created bbport.ini in " + instanceBbPortInitFilePath);
    System.IO.File.Copy(handlerBbPortInitFilePath, instanceBbPortInitFilePath, true);
  }

  var upscalingLineNumber = Context.FindLineNumberInTextFile(instanceBbPortInitFilePath, 'upscaler', Nucleus.SearchType.Contains); 
  var resolutionLineNumber = Context.FindLineNumberInTextFile(instanceBbPortInitFilePath, 'output_res', Nucleus.SearchType.Contains); 
  var skipIntroLineNumber = Context.FindLineNumberInTextFile(instanceBbPortInitFilePath, 'skip_intro', Nucleus.SearchType.Contains); 

  var dict = [ 
    upscalingLineNumber + '|upscaler=' + upscalingOption,
    resolutionLineNumber + '|output_res=' + resolutionOption,
    skipIntroLineNumber + '|skip_intro=1',
  ]; 

  Context.ReplaceLinesInTextFile(instanceBbPortInitFilePath, dict);
  Handler.Log("[STOP setupBbPortIniConfig]");
}

/**
 * Editing and preparing host_overrides.custom.json
 */
function setupCustomHostOverrides(coopServerIpOption) {
  Handler.Log("[START setupCustomHostOverrides]");

  var handlerCustomHostOverridesFilePath = System.IO.Path.Combine(Game.Folder, "bbsc-splitscreen-files\\host_overrides.custom.json");
  var instanceCustomHostOverridesFilePath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "user", "host_overrides.custom.json");
  System.IO.File.Copy(handlerCustomHostOverridesFilePath, instanceCustomHostOverridesFilePath, true);

  var dict = [ 
    '2|    "https://ss4.scej-network.jp:20443":  "http://' + coopServerIpOption + ':20443",',
    '3|    "http://thehuntersdream.com:18671/summon_messenger":  "http://' + coopServerIpOption +':31315",',
    '4|    "https://thehuntersdream.com:18671/summon_messenger":  "http://' + coopServerIpOption +':31315",'
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
  var statsServerIpOption = Context.Options["statsServerIpOption"].trim();
  var coopServerIpOption = Context.Options["coopServerIpOption"].trim();
  var seamlessOption = Context.Options["seamlessOption"].trim();

  //Run the servers and register the clients
  if (statsServerIpOption == LOCAL_IP && Context.PlayerID == 0) setupStatsShadnetServer();

  //Set up coop server
  if (coopServerIpOption == LOCAL_IP) setupCoopShadnetServer();

  var handlerBbportFolderPath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath);
  //Setting up settings.json first
  setupBbPortSettingsConfig(bloodborneFolderPath, framerateOption, statsServerIpOption, coopServerIpOption);

  var instanceBbPortContentFolderPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder);

  //Setting up bbport.ini
  setupBbPortIniConfig(instanceBbPortContentFolderPath, resolutionOption, upscalingOption);

  //Paste bbsc files if seamless is enabled
  if (seamlessOption == "Yes") {
    var handlerBbscFolderPath = System.IO.Path.Combine(Game.Folder, "bbsc-files");
  
    //Copying BBSC files to instance bbport folder
    var instanceBbPortContentFolderPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder);
    Context.CopyFolder(handlerBbscFolderPath, instanceBbPortContentFolderPath);
    System.Environment.SetEnvironmentVariable("BB_PROBE", "bbsc\\bbsc-launch.exe");
    System.Environment.SetEnvironmentVariable("BBSC_EMULATOR", "emulator\\bb-probe.exe");

    setupCustomHostOverrides(coopServerIpOption)
  }

  Game.ExecutableToLaunch = System.IO.Path.Combine(instanceBbPortContentFolderPath, "Play Bloodborne.exe");
};