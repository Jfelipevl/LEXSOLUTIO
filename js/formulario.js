
function enviarFormulario() {
    // Obtiene los datos del formulario.
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var servicio = document.getElementById('servicio').value;
  
    // Crea una nueva fila en la hoja de cálculo.
    var ss = SpreadsheetApp.openById('2PACX-1vRJ29UFP3eUFyXt9VKjv78Jyf80oDjS6trpZ3AVFF3-L8spdL-D_G1hfxPi3f5-6rmNiRYys7BqONxy');
    var sheet = ss.getSheetByName('1');
    var row = sheet.getLastRow() + 1;
  
    // Escribe los datos del formulario en la nueva fila.
    sheet.getRange(row, 1).setValue(nombre);
    sheet.getRange(row, 2).setValue(email);
    sheet.getRange(row, 3).setValue(fecha);
    sheet.getRange(row, 4).setValue(hora);
    sheet.getRange(row, 5).setValue(servicio);
    
  
    // Guarda la hoja de cálculo.
    sheet.save();
  
    // Muestra un mensaje de confirmación al usuario.
    alert('Tu cita ha sido agendada con éxito.');
    
    if (!nombre || !email || !fecha || !hora || !servicio) 
        alert('Por favor, complete todos los campos obligatorios.');
        return;
              
  }