//
//  MacroCommandTestCommand.js
//  PureMVC JavaScript Multicore
//
//  Copyright(c) 2023 Saad Shams <saad.shams@puremvc.org>
//  Your reuse is governed by the BSD-3-Clause License
//

import {MacroCommand} from "../../../src/index.js";
import {MacroCommandTestSub1Command} from "./MacroCommandTestSub1Command.js";
import {MacroCommandTestSub2Command} from "./MacroCommandTestSub2Command.js";

/**
 * A MacroCommand subclass used by MacroCommandTest.
 *
 * @see MacroCommandTest
 * @see MacroCommandTestSub1Command
 * @see MacroCommandTestSub2Command
 * @see MacroCommandTestVO
 *
 * @class MacroCommandTestCommand
 * @extends MacroCommand
 */
class MacroCommandTestCommand extends MacroCommand {

    /**
     * Initialize the MacroCommandTestCommand by adding
     * its 2 SubCommands.
     */
    initializeMacroCommand() {
        this.addSubCommand(() => new MacroCommandTestSub1Command());
        this.addSubCommand(() => new MacroCommandTestSub2Command());
    }

}
export { MacroCommandTestCommand }
