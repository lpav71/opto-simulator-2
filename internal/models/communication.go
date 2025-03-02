package models

type Communication struct {
	ID       int    `gorm:"primaryKey;autoIncrement;not null" json:"id"`
	Question string `gorm:"type:varchar(200);default:null" json:"question"`
}

func (Communication) TableName() string {
	return "communication"
}
