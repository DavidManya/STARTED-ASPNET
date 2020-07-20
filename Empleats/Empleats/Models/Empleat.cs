using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Empleats.Models
{
    public class Empleat
    {
        public int EmpleatId { get; set; }
        
        [Required(ErrorMessage = "El DNI es obligatorio")]
        [MinLength(9, ErrorMessage = "El DNI debe tener al menos 9 caracteres")]
        public string Dni { get; set; }
        
        [Required(ErrorMessage = "El Nombre es obligatorio")]
        public string Nom { get; set; }
        
        [Required(ErrorMessage = "Los Apellidos son obligatorios")]
        public string Cognoms { get; set; }

        [Required(ErrorMessage = "Debe informar el puesto de trabajo")]
        public string Carrec { get; set; }

        [Required(ErrorMessage = "Debe ingresar un correo electrónico")]
        [EmailAddress(ErrorMessage = "Debe ingresar un correo válido")]
        public string Correu { get; set; }

        //[RegularExpression("/^[0-9]+$/", ErrorMessage = "El valor ha de ser numérico")]
        public int Sou { get; set; }
    }
}
