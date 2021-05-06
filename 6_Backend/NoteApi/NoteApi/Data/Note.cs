using System;
using System.Collections.Generic;

#nullable disable

namespace NoteApi.Data
{
    public partial class Note
    {
        public int Id { get; set; }
        public string TitleNote { get; set; }
        public string DescriptionNote { get; set; }
        public DateTime? DateNote { get; set; }
    }
}
