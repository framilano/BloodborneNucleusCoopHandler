Hub.Handler.Version = 6;
Hub.Handler.Id = "apv0UYDgGi7MKk1BF";
Hub.Maintainer.Name = "framilano";
Hub.Maintainer.Id = "0xMRJDltsx0zljSu6";

const LOCAL_IP = "127.0.0.1";

//Ask user for Bloodborne game files folder path
Game.AddOption("Bloodborne Folder Path", "Enter Bloodborne folder path (the CUSAXXXXX folder containing eboot.bin)", "bloodborneFolderPath", []);

//Ask for the render resolution used by all instances
var resolutionOptions = ["Default 1080p (16:9)", "Optimal 1080p (16:9)", "640x360 (16:9)", "960x540 (16:9)", "1280x720 (16:9)", "1440x810 (16:9)", "1600x900 (16:9)"];
Game.AddOption("Render Resolution", 
  "Enter your desired render resolution for all instances", 
  "resolutionOption", 
  resolutionOptions
);

//Stats Server IP option
Game.AddOption(
  "Stats Server IP",
  "Enter your desired stats server ip for Bloodborne, suggested ones are:\n" +
  "- 127.0.0.1, will setup locally a stats server,\n" +
  "- thehuntersdream.com, will connect you to the shadPS4 team hosted server,\n" +
  "- game.nodreamforthehunter.com, will connect you to NoDreamForTheHunter (it requires you to register a player for each instance)",
  "statsServerIpOption", []
);

//Coop Server IP option
Game.AddOption(
  "Co-op Server IP",
  "Enter your desired co-op server ip for Bloodborne, suggested ones are:\n" +
  "- 127.0.0.1, will setup locally a stats server,\n" + 
  "- game.nodreamforthehunter.com, will connect you to NoDreamForTheHunter (it requires you to register a player for each instance)",
  "coopServerIpOption", 
  []
);

//Ask if we should enabled the Wozzardman seamless support
var seamlessOptions = ["Yes", "No"];
Game.AddOption(
  "Experimental Seamless Support", 
  "Shall we enable Wozzardman experimental Seamless support? (Only makes sense if you selected a co-op server option that uses Wozzardman)", 
  "seamlessOption", 
  seamlessOptions
);

//Ask for credentials for each instance
Game.AddOption("Player 0 Custom Server Username", "Enter your Player0 username for the online custom server. You can leave these credentials blank if using a local co-op server, meanwhile you must insert them to connect to online servers like NoDreamForTheHunter", "customServerPlayer0HunterUsername", []);
Game.AddOption("Player 0 Custom Server Password", "Enter your Player0 password for the online custom server", "customServerPlayer0HunterPassword", []);
Game.AddOption("Player 1 Custom Server Username", "Enter your Player1 username for the online custom server", "customServerPlayer1HunterUsername", []);
Game.AddOption("Player 1 Custom Server Password", "Enter your Player1 password for the online custom server", "customServerPlayer1HunterPassword", []);
Game.AddOption("Player 2 Custom Server Username", "Enter your Player2 username for the online custom server", "customServerPlayer2HunterUsername", []);
Game.AddOption("Player 2 Custom Server Password", "Enter your Player2 password for the online custom server", "customServerPlayer2HunterPassword", []);

Game.ExecutableContext = [];
Game.DirExclusions = [];
Game.KillProcessesOnClose = ["shadnet", "NoDreamForHunter"]; //Automatically closes this list of processes (names of the executables)
Game.DirSymlinkExclusions = [];
Game.FileSymlinkExclusions = [];
Game.FileSymlinkCopyInstead = [];
Game.GameName = "Bloodborne";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.ExecutableName = "shadPS4.exe";
Game.GUID = "Bloodborne";
Game.MaxPlayers = 3;
Game.MaxPlayersOneMonitor = 3;
Game.UseNucleusEnvironment = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "shadPS4";
Game.HasDynamicWindowTitle = true;
Game.RefreshWindowAfterStart = true;
Game.ResetWindows = true;
Game.SetForegroundWindowElsewhere = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.BlockRawInput = false;
Game.UserProfileSavePath = "AppData\\Roaming\\shadPS4";
Game.UserProfileConfigPath = "";
Game.UserProfileSavePathNoCopy = true;
Game.UserProfileConfigPathNoCopy = true;
Game.Description = 
  "Bloodborne Splitscreen Co-op based on Wozzardman and fhody125-web forks of shadnet server.\n\n" +
  "Required files:\n" +
  "- Bloodborne game files\n\n" +
  "Instructions:\n" + 
  "The only required step is selecting the shadPS4.exe executable contaned in this handler folder.\n\n" + 
  "A bunch of performances patches are enabled by default, you can disable them by editing *Bloodborne.xml* contained in this handler *patches* folder.\n" + 
  "This exact same handler is available on Linux thanks to PartyDeck.";
Game.PauseBetweenContextAndLaunch = 0;
Game.PauseBetweenProcessGrab = 0;
Game.PauseBetweenStarts = 0;

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
Game.SupportsMultipleKeyboardsAndMice = true;
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
Game.ProtoInput.MouseButtonFilter = true;
Game.ProtoInput.KeyboardButtonFilter = true;
Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
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
 * Set patches copying Bloodborne.xml original file to BloodborneHandler.xml and then edit BloodborneHandler.xml enabling the selected patches.
 */
function setupPatches(handlerBloodbornePatchesFilePath, resolutionOption) {
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
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "30 FPS++", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  patchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, "lower specific renders (Perf Increase)", Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ patchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);
  
  //Setting resolution patch using user option
  if (resolutionOption == resolutionOptions[0]) {
    Handler.Log("[STOP setupPatches] No resolution patch selected then!");
    return;
  }
  var resolutionPatchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, resolutionOption, Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ resolutionPatchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);

}

/**
 * Setting up stats shadnet server
 */
function setupStatsShadnetServer(seamlessOption) {
  Handler.Log("[START setupStatsShadnetServer]");

  var handlerStatsExecutableFilePath = System.IO.Path.Combine(Game.Folder, "shadnet\\fhody125-web-fork\\NoDreamForHunter.exe");
  Context.StartProcess(handlerStatsExecutableFilePath, "", false);

  Handler.Log("[STOP setupStatsShadnetServer]");
}

/**
 * Setting up shadnet server and register clients manually
 */
function setupCoopShadnetServer(seamlessOption) {
  Handler.Log("[START setupCoopShadnetServer]");

  //Server setup only during first instance launch  
  if (Context.PlayerID == 0) {
    //Enabling experimental Seamless if requested by the user
    var handlerShadnetConfigFilePath = System.IO.Path.Combine(Game.Folder, "shadnet\\wozzardman-fork\\shadnet.cfg");
    var seamlessLineNumber = Context.FindLineNumberInTextFile(handlerShadnetConfigFilePath, 'BloodborneSeamlessCoop', Nucleus.SearchType.Contains); 
    if (seamlessOption == "Yes") var dict = [ seamlessLineNumber + '|BloodborneSeamlessCoop=true', ]; 
    else var dict = [ seamlessLineNumber + '|BloodborneSeamlessCoop=false', ]; 
    Context.ReplaceLinesInTextFile(handlerShadnetConfigFilePath, dict);
    //Start main coop server
    var handlerShadnetExecutableFilePath = System.IO.Path.Combine(Game.Folder, "shadnet\\wozzardman-fork\\shadnet.exe");
    Context.StartProcess(handlerShadnetExecutableFilePath, "", false);
    System.Threading.Thread.Sleep(3000); //Wait a bit before registering the clients
  }

  //Register Hunter on the server for each instance
  var handlerShadnetSampleExecutableFilePath = System.IO.Path.Combine(Game.Folder, "shadnet\\wozzardman-fork\\shadnet-sample.exe");
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

  Handler.Log("[START setupBloodborneCustomConfig]");

}

function setupPatchesAndLaunchArgs(resolutionOption, seamlessOption, bloodborneFolderPath) {
  var handlerBloodbornePatchesFilePath = System.IO.Path.Combine(Game.Folder, "patches\\BloodborneHandler.xml");
  if (Context.PlayerID == 0) { setupPatches(handlerBloodbornePatchesFilePath, resolutionOption); }   //Replace Bloodborne.xml and edit it only with the first instance, we don't need to do this more than once
  var ebootBinFilePath =  System.IO.Path.Combine(bloodborneFolderPath, "eboot.bin");
  //This env var only makes sense with wozzardman fork
  if (seamlessOption == seamlessOptions[0])   System.Environment.SetEnvironmentVariable("SHADPS4_BLOODBORNE_SEAMLESS_COOP", "1");
  else System.Environment.SetEnvironmentVariable("SHADPS4_BLOODBORNE_SEAMLESS_COOP", "0");
  Context.StartArguments = "--patch \"" + handlerBloodbornePatchesFilePath + "\" --game \"" + ebootBinFilePath + "\"";
}

Game.Play = function() {

  //User answers
  var bloodborneFolderPath = Context.Options["bloodborneFolderPath"].trim();
  var resolutionOption = Context.Options["resolutionOption"].trim();
  var seamlessOption = Context.Options["seamlessOption"].trim();
  var statsServerIpOption = Context.Options["statsServerIpOption"].trim();
  var coopServerIpOption = Context.Options["coopServerIpOption"].trim();

  Handler.Log("Stats Server IP " + statsServerIpOption);
  Handler.Log("Co-op Server IP " + coopServerIpOption);

  //Game region answer from the user
  var titleId = bloodborneFolderPath.split(/[/\\]/).pop().replace("\"", "");
  Handler.Log(titleId);

  //Load patches from Bloodborne.xml in handler folder and configure env variables
  setupPatchesAndLaunchArgs(resolutionOption, seamlessOption, bloodborneFolderPath);

  //Creating instance user folder
  var instanceUserFolderPath =  System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath);
  System.IO.Directory.CreateDirectory(instanceUserFolderPath);
  
  //Run the servers and register the clients
  if (statsServerIpOption == LOCAL_IP && Context.PlayerID == 0) setupStatsShadnetServer(seamlessOption);

  //Set up coop server
  if (coopServerIpOption == LOCAL_IP) setupCoopShadnetServer(seamlessOption);

  //Copy host_overrides.json for each instance
  setupHostOverrides(instanceUserFolderPath, statsServerIpOption, coopServerIpOption)

  //Copy users.json to each instance with the correct login credentials
  setupUserConfig(instanceUserFolderPath, coopServerIpOption);

  //Create custom_config folder and copy Bloodborne custom config for each instance
  setupBloodborneCustomConfig(instanceUserFolderPath, titleId, coopServerIpOption);
};
