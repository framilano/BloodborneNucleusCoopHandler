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
  "- thehuntersdream.com, will connect you to the shadPS4 team hosted stats server",
  "statsServerIpOption", 
  []
);

//Coop Server IP option
Game.AddOption(
  "Co-op Server IP",
  "Enter your desired co-op server ip for Bloodborne, suggested ones are:\n" +
  "- 127.0.0.1, will setup locally a stats server",
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

Game.HardcopyGame = true;
Game.RunLauncherAndExe = false;
Game.ExecutableNames = ["Bloodborne.exe", "bb-probe.exe", "Play Bloodborne.exe"]

//#################### Nucleus Co-op Environment ####################

Game.UseNucleusEnvironment = true;
Game.UserProfileSavePath = "AppData\\Roaming\\bbport-launcher";

//#################### Focus ####################

Game.FakeFocus = true;
Game.HookFocus = true;
Game.HookInit = true;
Game.PreventWindowDeactivation = false;
Game.ForceProcessPick = true;

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
Game.ForceProcessSearch = true;
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
Game.ProtoInput.UseDinputRedirection = false;
// The old Nucleus options. Don't use these with the Xinput hook
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;

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

/*
 * Setting up stats shadnet server
 */
function setupStatsShadnetServer() {
  Handler.Log("[START setupStatsShadnetServer]");

  var executable = "BBSC-GameServer.exe";
  var arguments = "--shadnet 127.0.0.1 --host 127.0.0.1";
  var handlerStatsExecutableFilePath = System.IO.Path.Combine(Game.Folder, "shadnet", SHADNET_STATS_FORK, executable);
  Context.StartProcess(handlerStatsExecutableFilePath, arguments, false);

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
function setupBbPortSettingsConfig(handlerBbportFolderPath, bloodborneFolderPath, framerateOption, statsServerIpOption, coopServerIpOption) {
  Handler.Log("[START setupBbPortSettingsConfig]");

  var handlerBbportSettingsFilePath = System.IO.Path.Combine(Game.Folder, "config\\settings.json");
  var instanceBbportSettingsFilePath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "settings.json");

  var instanceBbportUserFolderPath = System.IO.Path.Combine(Context.EnvironmentPlayer, Context.UserProfileSavePath, "user");

  //Creating user folder if it doesn't exist
  if (!System.IO.Directory.Exists(instanceBbportUserFolderPath)) {
    Handler.Log("Created user directory in " + instanceBbportUserFolderPath);
    System.IO.Directory.CreateDirectory(instanceBbportUserFolderPath);
  }

  //If the file doesn't exist, we create it first
  if (!System.IO.File.Exists(instanceBbportSettingsFilePath)) {
    Handler.Log("Created settings.json in " + instanceBbportSettingsFilePath);
    System.IO.Directory.CreateDirectory(handlerBbportFolderPath);
    System.IO.File.Copy(handlerBbportSettingsFilePath, instanceBbportSettingsFilePath, true);
  }

  var gameDirLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'game_dir', Nucleus.SearchType.Contains); 
  var userDirLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'user_dir', Nucleus.SearchType.Contains); 
  var userDirLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'user_dir', Nucleus.SearchType.Contains); 
  var fpsModeLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'fps_mode', Nucleus.SearchType.Contains); 
  var shadnetUsernameLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_npid', Nucleus.SearchType.Contains); 
  var shadnetPasswordLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_password', Nucleus.SearchType.Contains); 
  var shadnetCoopServerLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_server', Nucleus.SearchType.Contains); 
  var shadnetStatsServerLineNumber = Context.FindLineNumberInTextFile(instanceBbportSettingsFilePath, 'online_community', Nucleus.SearchType.Contains); 

  var statsServerUrl = statsServerIpOption == LOCAL_IP ? "http://127.0.0.1:31313" : "https://" + statsServerIpOption + ":31313";

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

  var dict = [ 
    upscalingLineNumber + '|upscaler=' + upscalingOption,
    resolutionLineNumber + '|output_res=' + resolutionOption,
  ]; 

  Context.ReplaceLinesInTextFile(instanceBbPortInitFilePath, dict);
  Handler.Log("[STOP setupBbPortIniConfig]");
}

/**
 * Replacing bbport files with bbsc for Seamless Coop
 */
function setupSeamlessCoop(coopServerIpOption, bloodborneFolderPath) {
  Handler.Log("[START setupSeamlessCoop]");

  var handlerBbscFolderPath = System.IO.Path.Combine(Game.Folder, "bbsc-files");
  
  //Copying BBSC files to instance bbport folder
  var instanceBbPortContentFolderPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder);
  Context.CopyFolder(handlerBbscFolderPath, instanceBbPortContentFolderPath);

  //Editing BBSC ps1 to point to the coop ip option
  var playBbportPs1FilePath = System.IO.Path.Combine(instanceBbPortContentFolderPath, "tools", "play-bbport.ps1");
  var hostnameLineNumber = Context.FindLineNumberInTextFile(playBbportPs1FilePath, '$hostname = ', Nucleus.SearchType.Contains); 
  var dict = [ 
    hostnameLineNumber + '|$hostname = \'' + coopServerIpOption +'\'',
  ]; 
  Context.ReplaceLinesInTextFile(playBbportPs1FilePath, dict);

  //Editing BBSC Seamless Card
  var bbscCardFilePath = System.IO.Path.Combine(instanceBbPortContentFolderPath, "tools", "BBSC-card-SeamlessBloodborne.json");
  var shadnetLineNumber = Context.FindLineNumberInTextFile(bbscCardFilePath, '  "shadnet": ', Nucleus.SearchType.Contains); 
  var dict = [ 
    shadnetLineNumber + '|  "shadnet": "' + coopServerIpOption + ':31313",',
  ]; 
  Context.ReplaceLinesInTextFile(bbscCardFilePath, dict);

  //Editing bbport-paths.json
  var bbscPathsFilePath = System.IO.Path.Combine(instanceBbPortContentFolderPath, "tools", "bbport-paths.json");
  var bbportLineNumber = Context.FindLineNumberInTextFile(bbscPathsFilePath, 'bbport', Nucleus.SearchType.Contains); 
  var ebootLineNumber = Context.FindLineNumberInTextFile(bbscPathsFilePath, 'eboot', Nucleus.SearchType.Contains); 

  var bloodborneFilePath = System.IO.Path.Combine(instanceBbPortContentFolderPath, "Bloodborne.exe");
  var ebootFilePath = System.IO.Path.Combine(bloodborneFolderPath, "eboot.bin");

  var dict = [ 
    bbportLineNumber + '|    "bbport":  "' + bloodborneFilePath.replace(/\\/g, "\\\\") + '",',
    ebootLineNumber + '|    "eboot":  "' + ebootFilePath.replace(/\\/g, "\\\\") + '"'
  ]; 
  Context.ReplaceLinesInTextFile(bbscPathsFilePath, dict);

  
  Handler.Log("[STOP setupSeamlessCoop]");
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
  setupBbPortSettingsConfig(handlerBbportFolderPath, bloodborneFolderPath, framerateOption, statsServerIpOption, coopServerIpOption);

  var instanceBbPortContentFolderPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder);

  //Setting up bbport.ini
  setupBbPortIniConfig(instanceBbPortContentFolderPath, resolutionOption, upscalingOption);

  //Paste bbsc files if seamless is enabled
  if (seamlessOption == "Yes") setupSeamlessCoop(coopServerIpOption, bloodborneFolderPath)

  Game.LauncherExe = System.IO.Path.Combine(instanceBbPortContentFolderPath, "PLAY BBPORT + BBSC.cmd");
  Game.ExecutableToLaunch = System.IO.Path.Combine(instanceBbPortContentFolderPath, "PLAY BBPORT + BBSC.cmd");
};
