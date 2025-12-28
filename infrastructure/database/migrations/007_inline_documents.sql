-- Migration: 007_inline_documents.sql
-- Description: Add inline documents storage for project documentation
-- Date: 2025-12-25

-- Table for storing markdown documents directly in the database
CREATE TABLE IF NOT EXISTS project_documents_content (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255),
  type ENUM('plan', 'spec', 'report', 'manual', 'adr', 'roadmap', 'audit', 'other') DEFAULT 'plan',
  content_md LONGTEXT NOT NULL,
  content_html LONGTEXT,
  version INT DEFAULT 1,
  is_active BOOLEAN DEFAULT TRUE,
  embedding_id INT,
  created_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  -- Foreign keys
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,

  -- Indexes
  INDEX idx_project_type (project_id, type),
  INDEX idx_slug (slug),
  INDEX idx_active (is_active),
  FULLTEXT INDEX idx_content_search (name, content_md)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Version history table for document revisions
CREATE TABLE IF NOT EXISTS project_documents_versions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  document_id INT NOT NULL,
  version INT NOT NULL,
  content_md LONGTEXT NOT NULL,
  content_html LONGTEXT,
  changed_by INT,
  change_summary VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (document_id) REFERENCES project_documents_content(id) ON DELETE CASCADE,
  INDEX idx_document_version (document_id, version)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
