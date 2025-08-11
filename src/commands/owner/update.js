
const { PREFIX } = require(`${BASE_DIR}/config`);
const { InvalidParameterError, DangerError } = require(`${BASE_DIR}/errors`);
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

module.exports = {
  name: "update",
  description: "Actualiza el bot desde el repositorio remoto",
  commands: ["update", "actualizar"],
  usage: `${PREFIX}update`,
  handle: async ({
    sendSuccessReply,
    sendWarningReply,
    sendErrorReply,
    sendWaitReply,
  }) => {
    try {
      await sendWaitReply("🔄 Iniciando actualización del bot...");

      // Verificar si hay cambios locales
      const { stdout: statusOutput } = await execAsync('git status --porcelain');
      
      if (statusOutput.trim()) {
        await sendWarningReply("⚠️ Hay cambios locales sin confirmar. Guardando cambios...");
        await execAsync('git stash');
      }

      // Actualizar desde el repositorio remoto
      await sendWaitReply("📥 Descargando actualizaciones...");
      const { stdout: pullOutput } = await execAsync('git pull origin main');

      // Si había cambios guardados, intentar aplicarlos
      if (statusOutput.trim()) {
        try {
          await execAsync('git stash pop');
          await sendWarningReply("✅ Cambios locales restaurados.");
        } catch (stashError) {
          await sendWarningReply("⚠️ Algunos cambios locales pueden requerir revisión manual.");
        }
      }

      // Instalar nuevas dependencias si hay cambios en package.json
      if (pullOutput.includes('package.json')) {
        await sendWaitReply("📦 Instalando nuevas dependencias...");
        await execAsync('npm install');
      }

      if (pullOutput.includes('Already up to date')) {
        await sendSuccessReply("✅ El bot ya está actualizado a la última versión.");
      } else {
        await sendSuccessReply(`✅ Bot actualizado exitosamente!\n\n📋 Cambios:\n${pullOutput}`);
        
        // Opcional: reiniciar el bot (descomenta si lo deseas)
        // setTimeout(() => {
        //   process.exit(0);
        // }, 2000);
      }

    } catch (error) {
      console.error("Error durante la actualización:", error);
      await sendErrorReply(`❌ Error durante la actualización:\n${error.message}`);
    }
  },
};
