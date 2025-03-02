package models

// ClientRefraction представляет структуру данных для таблицы client_refraction
type ClientRefraction struct {
	ID         uint    `gorm:"primaryKey"`
	FullName   string  `gorm:"size:200;collate:utf8mb4_0900_ai_ci"`
	Gender     string  `gorm:"size:1;collate:utf8mb4_0900_ai_ci"`
	Age        int     `gorm:"type:int;"`
	OdSph      float32 `gorm:"type:decimal(3,2)"`
	OdCyl      float32 `gorm:"type:decimal(3,2)"`
	OdAx       int     `gorm:"type:int;"`
	OsSph      float32 `gorm:"type:decimal(3,2)"`
	OsCyl      float32 `gorm:"type:decimal(3,2)"`
	OsAx       int     `gorm:"type:int;"`
	VisOd      float32 `gorm:"type:decimal(2,1)"`
	VisOs      float32 `gorm:"type:decimal(2,1)"`
	LeadingEye string  `gorm:"size:2;collate:utf8mb4_0900_ai_ci"`
}

// TableName указывает имя таблицы в базе данных
func (ClientRefraction) TableName() string {
	return "client_refraction"
}
