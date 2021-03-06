﻿namespace Tasks09___15
{
    using System;
    using System.Collections.Generic;

    public class Student
    {
        private string firstName;
        private string lastName;
        private int fn;
        private string tel;
        private string email;
        private List<int> marks;
        private int groupNumber;

        public Student(string firstName, string lastName, int fn, string tel, string email, List<int> marks, int groupNumber)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.FN = fn;
            this.Tel = tel;
            this.Email = email;
            this.Marks = marks;
            this.GroupNumber = groupNumber;
        }
        public string FirstName
        {
            get
            {
                return this.firstName;  
            }

            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException();
                }

                this.firstName = value;
            }
        }

        public string LastName
        {
            get
            {
                return this.lastName;
            }

            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException();
                }

                this.lastName = value;
            }
        }

        public int FN
        {
            get
            {
                return this.fn;
            }

            set
            {
                if (value < 100000)
                {
                    throw new ArgumentException();
                }

                this.fn = value;
            }
        }

        public string Tel
        {
            get
            {
                return this.tel;
            }

            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException();
                }

                this.tel = value;
            }
        }

        public string Email
        {
            get
            {
                return this.email;
            }

            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException();
                }

                this.email = value;
            }
        }

        public List<int> Marks
        {
            get
            {
                return this.marks;
            }

            set
            {
                this.marks = value;
            }
        }

        public int GroupNumber
        {
            get
            {
                return this.groupNumber;    
            }

            set
            {
                if (value < 0)
                {
                    throw new ArgumentException();
                }

                this.groupNumber = value;
            }
        }

        public override string ToString()
        {
            return this.FirstName + " " + this.LastName;
        }
    }
}
