Hub.Handler.Version = 7;
Hub.Handler.Id = "apv0UYDgGi7MKk1BF";
Hub.Maintainer.Name = "framilano";
Hub.Maintainer.Id = "0xMRJDltsx0zljSu6";

const LOCAL_IP = "127.0.0.1";
const SHADNET_COOP_FORK = "clsamg22-stats-coop-server"
const SHADNET_STATS_FORK = "clsamg22-stats-coop-server"
const NODREAMFORTHEHUNTER_URL = "game.nodreamforthehunter.com"

//Ask user for Bloodborne game files folder path
Game.AddOption("Bloodborne Folder Path", "Enter Bloodborne folder path (the CUSAXXXXX folder containing eboot.bin)", "bloodborneFolderPath", []);

//Ask for the render resolution used by all instances
var resolutionOptions = ["Default 1080p (16:9)", "Optimal 1080p (16:9)", "640x360 (16:9)", "960x540 (16:9)", "1280x720 (16:9)", "1440x810 (16:9)", "1600x900 (16:9)"];
Game.AddOption("Render Resolution", 
  "Enter your desired render resolution for all instances", 
  "resolutionOption", 
  resolutionOptions
);

//Ask for the render resolution used by all instances
var framerateOptions = ["30", "60", "90"];
Game.AddOption(
  "Framerate Cap", 
  "Enter your desired framerate for all instances", 
  "framerateOption", 
  framerateOptions
);


//Stats Server IP option
Game.AddOption(
  "Stats Server IP",
  "Enter your desired stats server ip for Bloodborne, suggested ones are:\n" +
  "- 127.0.0.1, will run locally a stats server,\n" +
  "- thehuntersdream.com, will connect you to the shadPS4 team hosted server",
  "statsServerIpOption", []
);

//Coop Server IP option
Game.AddOption(
  "Co-op Server IP",
  "Enter your desired co-op server ip for Bloodborne, suggested ones are:\n" +
  "- 127.0.0.1, will run locally a coop server",
  "coopServerIpOption", 
  []
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
Game.AddOption("Player 0 Custom Server Username", "Enter your Player0 username for the online custom server.\n(empty if using 127.0.0.1 coop server)", "customServerPlayer0HunterUsername", []);
Game.AddOption("Player 0 Custom Server Password", "Enter your Player0 password for the online custom server.\n(empty if using 127.0.0.1 coop server)", "customServerPlayer0HunterPassword", []);
Game.AddOption("Player 1 Custom Server Username", "Enter your Player1 username for the online custom server.\n(empty if using 127.0.0.1 coop server)", "customServerPlayer1HunterUsername", []);
Game.AddOption("Player 1 Custom Server Password", "Enter your Player1 password for the online custom server.\n(empty if using 127.0.0.1 coop server)", "customServerPlayer1HunterPassword", []);
Game.AddOption("Player 2 Custom Server Username", "Enter your Player2 username for the online custom server.\n(empty if using 127.0.0.1 coop server)", "customServerPlayer2HunterUsername", []);
Game.AddOption("Player 2 Custom Server Password", "Enter your Player2 password for the online custom server.\n(empty if using 127.0.0.1 coop server)", "customServerPlayer2HunterPassword", []);

//#################### Game Info ####################

Game.ExecutableName = "shadPS4.exe";
Game.GUID = "Bloodborne-shadPS4";
Game.GameName = "Bloodborne-shadPS4";
Game.MaxPlayersOneMonitor = 4;
Game.MaxPlayers = 4;

//#################### File System ####################

Game.SymlinkGame = true;
Game.HardlinkGame = false;
Game.RunLauncherAndExe = false;
Game.ExecutableNames = ["shadPS4.exe"]

//#################### Nucleus Co-op Environment ####################

Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\Roaming\\shadPS4";

//#################### Focus ####################

Game.HasDynamicWindowTitle = true;
Game.RefreshWindowAfterStart = true;
Game.ResetWindows = true;
Game.SetForegroundWindowElsewhere = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "shadPS4";
Game.ForceProcessPick = false;

//#################### Extra ####################

Game.PauseBetweenContextAndLaunch = 0;
Game.PauseBetweenProcessGrab = 0;
Game.PauseBetweenStarts = 0;
Game.Description = 
  "Bloodborne Splitscreen Co-op based on shadnet emulation of stats and coop servers, with support for both local and online ones.\n\n" +
  "Required files:\n" +
  "- Bloodborne game files\n\n" +
  "Instructions:\n" + 
  "The only required step is selecting the shadPS4.exe executable, depending if it's the official one or a fork.\n\n" + 
  "A bunch of performances patches are enabled by default, you can disable them by editing *Bloodborne.xml* contained in this handler *patches* folder.\n" + 
  "This handler is also available on Linux thanks to PartyDeck.";
Game.ForceProcessSearch = false;
Game.KillProcessesOnClose = ["shadnet", "BBSC-GameServer"];

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
Game.ProtoInput.UseDinputRedirection = false;
// The old Nucleus options. Don't use these with the Xinput hook
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;

/**
 * Set patches copying Bloodborne.xml original file to BloodborneHandler.xml and then edit BloodborneHandler.xml enabling the selected patches.
 */
function setupPatches(handlerBloodbornePatchesFilePath, resolutionOption, framerateOption) {
  Handler.Log("[INFO setupPatches] resolutionOption: " + resolutionOption);
  //Copying untouched patches file to the used one
  var handlerBloodborneOriginalPatchesFilePath = System.IO.Path.Combine(Game.Folder, "patches\\Bloodborne.xml");
  System.IO.File.Copy(handlerBloodborneOriginalPatchesFilePath, handlerBloodbornePatchesFilePath, true);

  //Setting Default Patches
  var patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "Skip Intro", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "Performance Patch", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "rgba8f color space", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "Disable Motion Blur", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "Disable Dynamic Light Shadows", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "Disable Chromatic Aberration", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "Disable AA", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "Disable DoF", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "Disable SSAO", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "Disable Facegen", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "Model LOD 1", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "Lower object/corpse physics", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);

  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "lower specific renders (Perf Increase)", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  
  //Setting resolution patch using user option
  if (resolutionOption != resolutionOptions[0]) {
    var resolutionPatchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, resolutionOption, Nucleus.SearchType.Contains); 
    Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ resolutionPatchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  }

  //Setting framerate patch
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, framerateOption + " FPS++", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
}

/**
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
function setupCoopShadnetServer(seamlessOption) {
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
 * Setting up host_overrides.json with server ips
 */
function setupHostOverrides(instanceUserFolderPath, statsServerIpOption, coopServerIpOption) {
  var handlerHostOverridesFilePath = System.IO.Path.Combine(Game.Folder, "configs\\host_overrides.json");
  var instanceHostOverridesFilePath = System.IO.Path.Combine(instanceUserFolderPath, "host_overrides.json");
  System.IO.File.Copy(handlerHostOverridesFilePath, instanceHostOverridesFilePath, true);

  var statsServerLineNumber = Context.FindLineNumberInTextFile(instanceHostOverridesFilePath, 'placeholderip:20443', Nucleus.SearchType.Contains); 
  var coopServerLineNumber = Context.FindLineNumberInTextFile(instanceHostOverridesFilePath, 'placeholderip:31315', Nucleus.SearchType.Contains); 

  var dict = [ 
    statsServerLineNumber + '|placeholderip|' + statsServerIpOption, 
    coopServerLineNumber + '|placeholderip|' +  coopServerIpOption, 
  ]; 

  Context.ReplacePartialLinesInTextFile(instanceHostOverridesFilePath, dict);
}

/**
 * Setting up users.json with each player credentials
 */
function setupUserConfig(instanceUserFolderPath, coopServerIpOption) {
  Handler.Log("[START setupUserConfig]");
  
  var handlerUsersFilePath = System.IO.Path.Combine(Game.Folder, "configs\\users.json");
  var instanceUsersFilePath = System.IO.Path.Combine(instanceUserFolderPath, "users.json");
  System.IO.File.Copy(handlerUsersFilePath, instanceUsersFilePath, true);
  var hunterUsernameLineNumber = Context.FindLineNumberInTextFile(instanceUsersFilePath, '        "shadnet_npid"', Nucleus.SearchType.Contains); 
  var hunterPasswordLineNumber = Context.FindLineNumberInTextFile(instanceUsersFilePath, '        "shadnet_password"', Nucleus.SearchType.Contains); 

  //Username and password are different if using a custom server or the local one
  var hunterUsername = coopServerIpOption == LOCAL_IP ? "Hunter" + Context.PlayerID : Context.Options["customServerPlayer" + Context.PlayerID + "HunterUsername"].trim();
  var hunterPassword = coopServerIpOption == LOCAL_IP ? "12345" : Context.Options["customServerPlayer" + Context.PlayerID + "HunterPassword"].trim();
  Handler.Log("Logging in with username " + hunterUsername + " and password " + hunterPassword);

  //Handler.Log(Context.PlayerID)
  var dict = [ 
    hunterUsernameLineNumber + '|        "shadnet_npid": "' + hunterUsername + '",',
    hunterPasswordLineNumber + '|        "shadnet_password": "' + hunterPassword + '",',
  ]; 
  Context.ReplaceLinesInTextFile(instanceUsersFilePath, dict);
  Handler.Log("[STOP setupUserConfig]");
}


function setupBloodborneCustomConfig(instanceUserFolderPath, titleId, coopServerIpOption) {
  Handler.Log("[START setupBloodborneCustomConfig]");
  
  var handlerCustomConfigFilePath = System.IO.Path.Combine(Game.Folder, "configs\\CUSTOM_CONFIG.json");
  var instanceCustomConfigFolderPath = System.IO.Path.Combine(instanceUserFolderPath, "custom_configs");
  System.IO.Directory.CreateDirectory(instanceCustomConfigFolderPath);
  var instanceCustomConfigFilePath = System.IO.Path.Combine(instanceCustomConfigFolderPath, titleId + ".json");
  System.IO.File.Copy(handlerCustomConfigFilePath, instanceCustomConfigFilePath, true);

  var shadnetServerLineNumber = Context.FindLineNumberInTextFile(instanceCustomConfigFilePath, 'shadnet_server', Nucleus.SearchType.Contains); 
  var shadnetWebApiServerLineNumber = Context.FindLineNumberInTextFile(instanceCustomConfigFilePath, 'shadnet_webapi_server', Nucleus.SearchType.Contains); 
  var dict = [
    shadnetServerLineNumber + '|placeholderip|' + coopServerIpOption, 
    shadnetWebApiServerLineNumber + '|placeholderip|' +  coopServerIpOption, 
  ];
  
  Context.ReplacePartialLinesInTextFile(instanceCustomConfigFilePath, dict);
  
  if (coopServerIpOption == NODREAMFORTHEHUNTER_URL) {
    var audioSectionLineNumber = Context.FindLineNumberInTextFile(instanceCustomConfigFilePath, '"Audio": {', Nucleus.SearchType.Contains); 
    var dict = [ audioSectionLineNumber + '|"Audio": {|  "Audio": {\n    "voice_chat_enabled": 0,', ]
    Context.ReplacePartialLinesInTextFile(instanceCustomConfigFilePath, dict);
  }

  Handler.Log("[STOP setupBloodborneCustomConfig]");
}

function setupPatchesAndLaunchArgs(resolutionOption, framerateOption, bloodborneFolderPath, coopServerIpOption) {
  Handler.Log("[START setupPatchesAndLaunchArgs]")
  var handlerBloodbornePatchesFilePath = System.IO.Path.Combine(Game.Folder, "patches\\BloodborneHandler.xml");
  if (Context.PlayerID == 0) { setupPatches(handlerBloodbornePatchesFilePath, resolutionOption, framerateOption); }   //Replace Bloodborne.xml and edit it only with the first instance, we don't need to do this more than once
  var ebootBinFilePath =  System.IO.Path.Combine(bloodborneFolderPath, "eboot.bin");
  
  //This is necessary for nodreamforhunters same ip connections
  if (coopServerIpOption == NODREAMFORTHEHUNTER_URL) {
    Handler.Log("Setting env vars for NoDreamForTheHunter...")
    System.Environment.SetEnvironmentVariable("SHADPS4_FORCE_RELAY", "1");
    System.Environment.SetEnvironmentVariable("SHADPS4_P2P_PORT", "140" + Context.PlayerID);
    Handler.Log("PORT " + "140" + Context.PlayerID);
  }
  Context.StartArguments = "--patch \"" + handlerBloodbornePatchesFilePath + "\" --game \"" + ebootBinFilePath + "\"";
  Handler.Log("[STOP setupPatchesAndLaunchArgs]")
}

Game.Play = function() {
  //User answers
  var bloodborneFolderPath = Context.Options["bloodborneFolderPath"].trim();
  var resolutionOption = Context.Options["resolutionOption"].trim();
  var framerateOption = Context.Options["framerateOption"].trim();
  var seamlessOption = Context.Options["seamlessOption"].trim();
  var statsServerIpOption = Context.Options["statsServerIpOption"].trim();
  var coopServerIpOption = Context.Options["coopServerIpOption"].trim();

  Handler.Log("Stats Server IP " + statsServerIpOption);
  Handler.Log("Co-op Server IP " + coopServerIpOption);

  //Game region answer from the user
  var titleId = bloodborneFolderPath.split(/[/\\]/).pop().replace("\"", "");
  Handler.Log(titleId);

  //Load patches from Bloodborne.xml in handler folder and configure env variables
  setupPatchesAndLaunchArgs(resolutionOption, framerateOption, bloodborneFolderPath, coopServerIpOption);

  //Creating instance user folder
  var instanceUserFolderPath =  System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath);
  System.IO.Directory.CreateDirectory(instanceUserFolderPath);
  
  //Run the servers and register the clients
  if (statsServerIpOption == LOCAL_IP && Context.PlayerID == 0) setupStatsShadnetServer();

  //Set up coop server
  if (coopServerIpOption == LOCAL_IP) setupCoopShadnetServer(seamlessOption);

  //Copy host_overrides.json for each instance
  setupHostOverrides(instanceUserFolderPath, statsServerIpOption, coopServerIpOption)

  //Copy users.json to each instance with the correct login credentials
  setupUserConfig(instanceUserFolderPath, coopServerIpOption);

  //Create custom_config folder and copy Bloodborne custom config for each instance
  setupBloodborneCustomConfig(instanceUserFolderPath, titleId, coopServerIpOption);
};
