Hub.Handler.Version = 4;
Hub.Handler.Id = "apv0UYDgGi7MKk1BF";
Hub.Maintainer.Name = "framilano";
Hub.Maintainer.Id = "0xMRJDltsx0zljSu6";

//Ask user for Bloodborne game files folder path
Game.AddOption("Bloodborne Folder Path", "Enter Bloodborne folder path (the CUSAXXXXX folder containing eboot.bin)", "bloodborneFolderPath", []);

var resolutionOptions = ["Default 1080p (16:9)", "Optimal 1080p (16:9)", "640x360 (16:9)", "960x540 (16:9)", "1280x720 (16:9)", "1440x810 (16:9)", "1600x900 (16:9)"];
Game.AddOption("Render Resolution", "Enter your desired render resolution for all instances", "resolutionOption", resolutionOptions);

var seamlessOptions = ["Yes", "No"];
Game.AddOption("Experimental Seamless Support", "Shall we enable Wozzardman experimental Seamless support?", "seamlessOption", seamlessOptions);

var statsServerOptions = ["Local (Offline)", "The Hunter's Dream (Online)"];
Game.AddOption("Stats and Messengers Server", "Which server for messengers, ghosts and stats shall we use?", "statsServerOption", statsServerOptions);

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
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.UseNucleusEnvironment = true;
Game.CMDLaunch = true;
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
Game.Description = "Bloodborne Splitscreen Co-op based on Wozzardman and fhody125-web forks of shadnet server.\n\nRequired files:\n- Bloodborne game files\n\nInstructions:\nThe only required step is selecting the shadPS4.exe executable contaned in this handler folder.\n\nA bunch of performances patches are enabled by default, you can disable them by editing *Bloodborne.xml* contained in this handler *patches* folder.\nThis exact same handler is available on Linux thanks to PartyDeck.";
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
  if (resolutionOption == "Default 1080p (16:9)") {
    Handler.Log("[STOP setupPatches] No resolution patch selected then!");
    return;
  }
  var resolutionPatchLineNumber = Context.FindLineNumberInTextFile(handlerBloodbornePatchesFilePath, resolutionOption, Nucleus.SearchType.Contains); 
  Context.ReplacePartialLinesInTextFile(handlerBloodbornePatchesFilePath, [ resolutionPatchLineNumber + '|isEnabled="false"|isEnabled="true"' ]);

}

/**
 * Setting up shadnet server and register clients manually
 */
function setupShadnetServer(seamlessOption, statsServerOption) {
  Handler.Log("[INFO setupShadnetServer]");

  //Server setup only during first instance launch  
  if (Context.PlayerID == 0) {
    //Enabling experimental Seamless if requested by the user
    var handlerShadnetConfigFilePath = System.IO.Path.Combine(Game.Folder, "shadnet\\wozzardman-fork\\shadnet.cfg");
    var seamlessLineNumber = Context.FindLineNumberInTextFile(handlerShadnetConfigFilePath, 'BloodborneSeamlessCoop', Nucleus.SearchType.Contains); 
    if (seamlessOption == "Yes") var dict = [ seamlessLineNumber + '|BloodborneSeamlessCoop=true', ]; 
    else var dict = [ seamlessLineNumber + '|BloodborneSeamlessCoop=false', ]; 
    Context.ReplaceLinesInTextFile(handlerShadnetConfigFilePath, dict);
    //Start stats server only if requested by the user
    if (statsServerOption == "Local (Offline)") {
      var handlerStatsExecutableFilePath = System.IO.Path.Combine(Game.Folder, "shadnet\\fhody125-web-fork\\NoDreamForHunter.exe");
      Context.StartProcess(handlerStatsExecutableFilePath, "", false);
    }
    //Start main coop server
    var handlerShadnetExecutableFilePath = System.IO.Path.Combine(Game.Folder, "shadnet\\wozzardman-fork\\shadnet.exe");
    Context.StartProcess(handlerShadnetExecutableFilePath, "", false);
    System.Threading.Thread.Sleep(3000); //Wait a bit before registering the clients
  }

  //Register Hunter on the server for each instance
  var handlerShadnetSampleExecutableFilePath = System.IO.Path.Combine(Game.Folder, "shadnet\\wozzardman-fork\\shadnet-sample.exe");
  Context.StartProcess(handlerShadnetSampleExecutableFilePath, "127.0.0.1 31313 register Hunter" + Context.PlayerID + " 12345 hunter" + Context.PlayerID + "@placeholder.com NucleusCoopBloodborneHandler", false)
  Handler.Log("[STOP setupShadnetServer]");
}

Game.Play = function() {

  //User answers
  var bloodborneFolderPath = Context.Options["bloodborneFolderPath"];
  var resolutionOption = Context.Options["resolutionOption"];
  var statsServerOption = Context.Options["statsServerOption"];
  var seamlessOption = Context.Options["seamlessOption"];

  //Game region answer from the user
  var titleId = bloodborneFolderPath.split(/[/\\]/).pop().replace("\"", "");
  Handler.Log(titleId);

  //Load patches from Bloodborne.xml in handler folder and configure env variables
  var handlerBloodbornePatchesFilePath = System.IO.Path.Combine(Game.Folder, "patches\\BloodborneHandler.xml");
  if (Context.PlayerID == 0) { setupPatches(handlerBloodbornePatchesFilePath, resolutionOption); }   //Replace Bloodborne.xml and edit it only with the first instance, we don't need to do this more than once
  var ebootBinFilePath =  System.IO.Path.Combine(bloodborneFolderPath, "eboot.bin");
  if (seamlessOption == "Yes")   System.Environment.SetEnvironmentVariable("SHADPS4_BLOODBORNE_SEAMLESS_COOP", "1");
  else System.Environment.SetEnvironmentVariable("SHADPS4_BLOODBORNE_SEAMLESS_COOP", "0");
  Context.StartArguments = "--patch \"" + handlerBloodbornePatchesFilePath + "\" --game \"" + ebootBinFilePath + "\"";

  //Setting up server and registering clients
  setupShadnetServer(seamlessOption, statsServerOption);
  
  //Creating instance user folder
  var instanceUserFolderPath =  System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath);
  System.IO.Directory.CreateDirectory(instanceUserFolderPath);
  
  //Copy config.json to each instance
  var handlerConfigFilePath = System.IO.Path.Combine(Game.Folder, "configs\\config.json");
  var instanceConfigFilePath = System.IO.Path.Combine(instanceUserFolderPath, "config.json");
  System.IO.File.Copy(handlerConfigFilePath, instanceConfigFilePath, true);

  //Copy users.json to each instance with the correct login credentials
  var handlerUsersFilePath = System.IO.Path.Combine(Game.Folder, "configs\\users.json");
  var instanceUsersFilePath = System.IO.Path.Combine(instanceUserFolderPath, "users.json");
  System.IO.File.Copy(handlerUsersFilePath, instanceUsersFilePath, true);
  var hunterUsernameLineNumber = Context.FindLineNumberInTextFile(instanceUsersFilePath, '        "shadnet_npid"', Nucleus.SearchType.Contains); 
  var hunterUsername = "Hunter" + Context.PlayerID;
  //Handler.Log(Context.PlayerID)
  var dict = [ 
    hunterUsernameLineNumber + '|        "shadnet_npid": "' + hunterUsername + '",',
  ]; 
  Context.ReplaceLinesInTextFile(instanceUsersFilePath, dict);

  //Copy host_overrides.json for each instance
  var handlerHostOverridesFilePath = System.IO.Path.Combine(Game.Folder, "configs\\host_overrides.json");
  var statsServerLineNumber = Context.FindLineNumberInTextFile(handlerHostOverridesFilePath, 'https://ss4.scej-network.jp:20443', Nucleus.SearchType.Contains); 
  if (statsServerOption == "Local (Offline)") var dict = [ statsServerLineNumber + '|  "https://ss4.scej-network.jp:20443": "http://127.0.0.1",', ]; 
  else var dict = [ statsServerLineNumber + '|  "https://ss4.scej-network.jp:20443": "http://thehuntersdream.com",', ];
  Context.ReplaceLinesInTextFile(handlerHostOverridesFilePath, dict);
  var instanceHostOverridesFilePath = System.IO.Path.Combine(instanceUserFolderPath, "host_overrides.json");
  System.IO.File.Copy(handlerHostOverridesFilePath, instanceHostOverridesFilePath, true);

  //Create custom_config folder and copy Bloodborne custom config for each instance
  var handlerCustomConfigFilePath = System.IO.Path.Combine(Game.Folder, "configs\\CUSTOM_CONFIG.json");
  var instanceCustomConfigFolderPath = System.IO.Path.Combine(instanceUserFolderPath, "custom_configs");
  System.IO.Directory.CreateDirectory(instanceCustomConfigFolderPath);
  var instanceCustomConfigFilePath = System.IO.Path.Combine(instanceCustomConfigFolderPath, titleId + ".json");
  System.IO.File.Copy(handlerCustomConfigFilePath, instanceCustomConfigFilePath, true);
};
