// ─────────────────────────────────────────────
//  HYPN Newsletter — Auto-responder
//  Pegá este código en Google Apps Script
//  (script.google.com) y configurá el trigger
// ─────────────────────────────────────────────

function checkAndReply() {
  // Busca mails de Formspree no procesados
  var threads = GmailApp.search('from:formspree subject:"Nueva suscripción — HYPN Newsletter" -label:hypn-procesado');

  // Crea el label si no existe
  var label = GmailApp.getUserLabelByName('hypn-procesado');
  if (!label) label = GmailApp.createLabel('hypn-procesado');

  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    var msg = messages[0];
    var body = msg.getPlainBody();

    // Extrae el email del cuerpo del mail de Formspree
    var emailMatch = body.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
    if (!emailMatch) continue;

    var subscriberEmail = emailMatch[1];

    // No le mandamos mail a nuestra propia cuenta
    if (subscriberEmail === 'hypndreamexperience@gmail.com') {
      threads[i].addLabel(label);
      continue;
    }

    // Manda el mail de bienvenida
    GmailApp.sendEmail(
      subscriberEmail,
      'Bienvenido al inconsciente colectivo ✦',
      '', // plain text vacío, usamos HTML
      {
        htmlBody: getEmailHTML(),
        name: 'HYPN',
        replyTo: 'hypndreamexperience@gmail.com'
      }
    );

    // Marca el thread como procesado
    threads[i].addLabel(label);

    Logger.log('Mail enviado a: ' + subscriberEmail);
  }
}

function getEmailHTML() {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenido a HYPN</title>
</head>
<body style="margin:0;padding:0;background-color:#06040F;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#06040F;padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">

          <!-- LOGO -->
          <tr>
            <td align="center" style="padding-bottom:48px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(135deg,#8A38F5,#6B20D9);border-radius:14px;padding:14px 20px;">
                    <span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:22px;font-weight:800;color:#ffffff;letter-spacing:0.08em;line-height:1;">HYPN</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- EYEBROW -->
          <tr>
            <td align="center" style="padding-bottom:16px;">
              <span style="font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#8A38F5;">Comunidad onírica</span>
            </td>
          </tr>

          <!-- TÍTULO -->
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <h1 style="margin:0;font-size:32px;font-weight:800;color:#ffffff;letter-spacing:-0.03em;line-height:1.15;text-align:center;">
                Entraste al<br>inconsciente colectivo.
              </h1>
            </td>
          </tr>

          <!-- DIVISOR -->
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <div style="width:40px;height:2px;background:linear-gradient(90deg,#8A38F5,#6B20D9);border-radius:2px;"></div>
            </td>
          </tr>

          <!-- CUERPO -->
          <tr>
            <td style="padding-bottom:40px;">
              <p style="margin:0 0 18px 0;font-size:15px;color:rgba(255,255,255,0.7);line-height:1.75;text-align:center;">
                Gracias por suscribirte a HYPN. A partir de ahora vas a recibir novedades sobre nuevas experiencias, movimientos del mercado onírico y acceso anticipado a Fever.
              </p>
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.7);line-height:1.75;text-align:center;">
                Mientras tanto, explorá el proyecto en nuestra web.
              </p>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td align="center" style="padding-bottom:56px;">
              <a href="https://hypn.com" style="display:inline-block;background:linear-gradient(135deg,#8A38F5,#6B20D9);color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:0.04em;padding:14px 32px;border-radius:10px;">
                Explorar HYPN →
              </a>
            </td>
          </tr>

          <!-- FIRMA -->
          <tr>
            <td align="center" style="padding-bottom:8px;">
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.35);line-height:1.6;text-align:center;">
                Dormí bien.<br>
                <span style="color:rgba(255,255,255,0.2);">— El equipo de HYPN</span>
              </p>
            </td>
          </tr>

          <!-- SEPARADOR -->
          <tr>
            <td style="padding:32px 0 24px;">
              <div style="height:1px;background:rgba(255,255,255,0.07);"></div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center">
              <p style="margin:0;font-size:10px;color:rgba(255,255,255,0.18);line-height:1.6;text-align:center;">
                Recibiste este mail porque te suscribiste al newsletter de HYPN.<br>
                Si no fuiste vos, podés ignorarlo.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
